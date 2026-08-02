"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    posthog?: PostHogQueue;
  }
}

type PostHogQueue = {
  __SV?: number;
  __loaded?: boolean;
  _i?: unknown[];
  init?: (key: string, config: Record<string, unknown>, name?: string) => void;
  capture?: (eventName: string, properties?: Record<string, unknown>) => void;
  people?: PostHogQueue;
  push?: (...items: unknown[]) => number;
  toString?: (stub?: boolean) => string;
  [key: string]: unknown;
};

type CampaignAttribution = {
  landing_path: string;
  landing_url: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

const ATTRIBUTION_STORAGE_KEY = "penkra_campaign_attribution";

function loadPostHogStub() {
  if (window.posthog?.__SV || window.posthog?.__loaded) return;

  const posthog = (window.posthog = window.posthog || ([] as unknown as PostHogQueue));
  posthog._i = [];

  posthog.init = function init(
    key: string,
    config: Record<string, unknown>,
    name?: string,
  ) {
    function stubMethod(target: PostHogQueue, methodName: string) {
      const parts = methodName.split(".");
      let methodTarget = target;
      let method = methodName;

      if (parts.length === 2) {
        methodTarget = target[parts[0]] as PostHogQueue;
        method = parts[1];
      }

      methodTarget[method] = function queuePostHogCall(...args: unknown[]) {
        methodTarget.push?.([method, ...args]);
      };
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.async = true;
    script.src =
      String(config.api_host).replace(".i.posthog.com", "-assets.i.posthog.com") +
      "/static/array.js";
    document.head.appendChild(script);

    let target = posthog;
    const instanceName = name ?? "posthog";

    if (name) {
      target = (posthog[name] = [] as unknown as PostHogQueue) as PostHogQueue;
    }

    target.people = target.people || ([] as unknown as PostHogQueue);
    target.toString = function toString(stub?: boolean) {
      let value = "posthog";
      if (instanceName !== "posthog") value += `.${instanceName}`;
      if (!stub) value += " (stub)";
      return value;
    };
    target.people.toString = function peopleToString() {
      return `${target.toString?.(true)}.people (stub)`;
    };

    for (const method of [
      "init",
      "capture",
      "register",
      "register_once",
      "unregister",
      "identify",
      "alias",
      "reset",
      "get_distinct_id",
      "set_config",
    ]) {
      stubMethod(target, method);
    }

    posthog._i?.push([key, config, instanceName]);
  };

  posthog.__SV = 1;
}

function readCampaignAttribution(): CampaignAttribution | null {
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!stored) return null;

    return JSON.parse(stored) as CampaignAttribution;
  } catch {
    return null;
  }
}

function captureCampaignAttribution(): CampaignAttribution | null {
  const existing = readCampaignAttribution();
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const attribution: CampaignAttribution = {
    landing_path: window.location.pathname,
    landing_url: window.location.href,
  };

  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ] as const) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }

  if (document.referrer) attribution.referrer = document.referrer;

  const hasCampaignContext =
    Boolean(attribution.referrer) ||
    Boolean(attribution.utm_source) ||
    Boolean(attribution.utm_medium) ||
    Boolean(attribution.utm_campaign) ||
    Boolean(attribution.utm_content) ||
    Boolean(attribution.utm_term);

  if (!hasCampaignContext) return null;

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    return attribution;
  }

  return attribution;
}

export function Analytics() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  useEffect(() => {
    if (!key) return;

    loadPostHogStub();

    window.posthog?.init?.(key, {
      api_host: host,
      autocapture: false,
      capture_pageview: true,
      capture_pageleave: false,
      disable_session_recording: true,
      advanced_disable_flags: true,
      person_profiles: "identified_only",
    });

    const campaignAttribution = captureCampaignAttribution();

    function captureClick(event: MouseEvent) {
      const target = event.target;
      const link =
        target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;

      if (!link || !window.posthog) return;

      const href = link.getAttribute("href") || "";
      let eventName: string | null = null;

      if (href === "/download" || href.startsWith("/download/")) eventName = "download_click";
      else if (href.includes("github.com/penkrahq/penkra")) eventName = "github_click";
      else if (href.startsWith("mailto:")) eventName = "email_click";

      if (!eventName) return;

      window.posthog.capture?.(eventName, {
        href,
        label: (link.textContent || "").trim(),
        path: window.location.pathname,
        cta_id: link.dataset.ctaId,
        cta_location: link.dataset.ctaLocation,
        ...campaignAttribution,
      });
    }

    document.addEventListener("click", captureClick, true);

    return () => {
      document.removeEventListener("click", captureClick, true);
    };
  }, [host, key]);

  return null;
}
