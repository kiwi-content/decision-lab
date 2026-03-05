import { NextRequest, NextResponse } from "next/server";
import { canonicalHost } from "./app/site";

const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);

export function proxy(request: NextRequest) {
  const hostHeader = request.headers.get("host");
  if (!hostHeader) {
    return NextResponse.next();
  }

  const host = hostHeader.split(":")[0].toLowerCase();
  const isCanonicalHost = host === canonicalHost;
  const isWwwVariant = host === `www.${canonicalHost}`;
  const isVercelHost = host === "decisionlab.vercel.app";

  if (localHosts.has(host) || isCanonicalHost || (!isWwwVariant && !isVercelHost)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = "https";
  redirectUrl.host = canonicalHost;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|manifest.webmanifest).*)"],
};
