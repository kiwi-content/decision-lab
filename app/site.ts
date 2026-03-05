export const siteName = "Decision Lab";
export const siteDescription =
  "Use fast decision tools for relationships, relocation, career choices, and decluttering. Get a clear next step in about 60 seconds.";

const canonicalSiteUrl = "https://decisionlab.today";

function normalizeSiteUrl(rawUrl?: string): string {
  if (!rawUrl) {
    return canonicalSiteUrl;
  }

  const trimmed = rawUrl.replace(/\/$/, "");

  try {
    const parsed = new URL(trimmed);
    if (parsed.hostname.endsWith(".vercel.app")) {
      return canonicalSiteUrl;
    }
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return canonicalSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const canonicalHost = new URL(siteUrl).hostname;
