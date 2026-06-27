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

    function captureClick(event: MouseEvent) {
      const target = event.target;
      const link =
        target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;

      if (!link || !window.posthog) return;

      const href = link.getAttribute("href") || "";
      let eventName: string | null = null;

      if (href.includes("wa.me")) eventName = "whatsapp_click";
      else if (href.includes("cal.com")) eventName = "book_call_click";
      else if (href.startsWith("mailto:")) eventName = "email_click";
      else if (href.includes("/ghana/business-registration")) {
        eventName = "business_registration_click";
      } else if (href.includes("/services")) eventName = "services_click";

      if (!eventName) return;

      window.posthog.capture?.(eventName, {
        href,
        label: (link.textContent || "").trim(),
        path: window.location.pathname,
        cta_id: link.dataset.ctaId,
        cta_location: link.dataset.ctaLocation,
      });
    }

    document.addEventListener("click", captureClick, true);

    return () => {
      document.removeEventListener("click", captureClick, true);
    };
  }, [host, key]);

  return null;
}
