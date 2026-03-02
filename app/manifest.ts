import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "./site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "DecisionLab",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fffff5",
    theme_color: "#80caff",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
