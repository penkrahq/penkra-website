import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  if (host !== "www.penkra.com") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.hostname = "penkra.com";
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|icons|og|brand).*)"],
};
