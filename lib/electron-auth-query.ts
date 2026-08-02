import {
  PENKRA_DESKTOP_AUTH_CLIENT_ID,
  type PenkraDesktopFlavor,
} from "./auth-client";

export type ElectronAuthQuery = {
  client_id: string;
  code_challenge: string;
  code_challenge_method: string;
  state: string;
  desktop_flavor?: Exclude<PenkraDesktopFlavor, "production">;
};

type SearchParams = Record<string, string | string[] | undefined>;

export function parseElectronAuthQuery(
  searchParams: SearchParams,
): ElectronAuthQuery | undefined {
  const clientId = single(searchParams.client_id);
  const codeChallenge = single(searchParams.code_challenge);
  const codeChallengeMethod = single(searchParams.code_challenge_method);
  const state = single(searchParams.state);
  const desktopFlavor = single(searchParams.desktop_flavor);

  if (
    clientId !== PENKRA_DESKTOP_AUTH_CLIENT_ID ||
    codeChallengeMethod?.toUpperCase() !== "S256" ||
    !codeChallenge ||
    !/^[A-Za-z0-9_-]{43}=?$/.test(codeChallenge) ||
    !state ||
    !/^[A-Za-z0-9_-]{8,256}$/.test(state) ||
    (desktopFlavor !== undefined && desktopFlavor !== "development")
  ) {
    return undefined;
  }

  const query: ElectronAuthQuery = {
    client_id: clientId,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    state,
  };
  if (desktopFlavor) query.desktop_flavor = desktopFlavor;
  return query;
}

export function electronAuthSearch(query?: ElectronAuthQuery): string {
  if (!query) return "";
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) search.set(key, value);
  }
  return `?${search.toString()}`;
}

export function accountAuthHref(
  path: string,
  query?: ElectronAuthQuery,
  values: Record<string, string> = {},
): string {
  const search = new URLSearchParams(
    electronAuthSearch(query).replace(/^\?/, ""),
  );
  for (const [key, value] of Object.entries(values)) search.set(key, value);
  const serialized = search.toString();
  return serialized ? `${path}?${serialized}` : path;
}

export function accountAuthUrl(
  origin: string,
  path: string,
  query?: ElectronAuthQuery,
  values: Record<string, string> = {},
): string {
  return new URL(accountAuthHref(path, query, values), origin).toString();
}

export function electronAuthFlavor(
  query: ElectronAuthQuery,
): PenkraDesktopFlavor {
  return query.desktop_flavor ?? "production";
}

export function electronTransferQuery(query: ElectronAuthQuery) {
  const { desktop_flavor: _desktopFlavor, ...transferQuery } = query;
  return transferQuery;
}

function single(value: string | string[] | undefined): string | undefined {
  return typeof value === "string" ? value : undefined;
}
