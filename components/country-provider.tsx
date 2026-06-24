"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CountryCode = "GH" | "other";

type CountryInfo = {
  code: CountryCode;
  name: string;
  live: boolean;
};

const COUNTRIES: Record<CountryCode, CountryInfo> = {
  GH: { code: "GH", name: "Ghana", live: true },
  other: { code: "other", name: "More countries", live: false },
};

type CountryContextValue = {
  country: CountryInfo;
  setCountry: (code: CountryCode) => void;
  ready: boolean;
};

const CountryContext = createContext<CountryContextValue | null>(null);

const STORAGE_KEY = "penkra:country";

function detectCountry(): CountryCode {
  if (typeof window === "undefined") return "GH";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "GH" || stored === "other") return stored;
  } catch {}
  const locale =
    navigator.languages?.[0] || navigator.language || "";
  const region = locale.split("-")[1]?.toUpperCase();
  if (region === "GH") return "GH";
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz === "Africa/Accra") return "GH";
  } catch {}
  return "GH";
}

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState<CountryCode>("GH");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCode(detectCountry());
    setReady(true);
  }, []);

  const setCountry = useCallback((next: CountryCode) => {
    setCode(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const value = useMemo<CountryContextValue>(
    () => ({ country: COUNTRIES[code], setCountry, ready }),
    [code, setCountry, ready]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) {
    return {
      country: COUNTRIES.GH,
      setCountry: () => {},
      ready: false,
    };
  }
  return ctx;
}
