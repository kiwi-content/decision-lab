import { NextRequest, NextResponse } from "next/server";
import { canonicalHost } from "./app/site";

const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);
const vercelHosts = new Set(["decisionlab.vercel.app"]);

export function proxy(request: NextRequest) {
  const hostHeader = request.headers.get("host");
  if (!hostHeader) {
    return NextResponse.next();
  }

  const host = hostHeader.split(":")[0].toLowerCase();

  if (localHosts.has(host) || host === canonicalHost || !vercelHosts.has(host)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.host = canonicalHost;

  if (redirectUrl.host === host) {
    return NextResponse.next();
  }

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|manifest.webmanifest).*)"],
};
