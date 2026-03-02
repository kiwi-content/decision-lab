export const siteName = "Decision Lab";
export const siteDescription =
  "Quit your job? Text your ex at 2 AM? Break up tonight? Do it here first - zero consequences, full clarity.";

const defaultSiteUrl = "https://decisionlab.today";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, "");
