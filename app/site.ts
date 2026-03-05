export const siteName = "Decision Lab";
export const siteDescription =
  "Use fast decision tools for relationships, relocation, career choices, and decluttering. Get a clear next step in about 60 seconds.";

const defaultSiteUrl = "https://decisionlab.today";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, "");
