"use client";

import { useEffect, useState } from "react";

type ChickenLottieProps = {
  className?: string;
  size?: number;
};

const CHICKEN_LOTTIE_SRC =
  "https://lottie.host/c7008fb6-47b9-48c4-a91e-7d03434b9d95/3siN9Waswc.lottie";

export default function ChickenLottie({ className, size = 164 }: ChickenLottieProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setShouldAnimate(!mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<dotlottie-wc src="${CHICKEN_LOTTIE_SRC}" ${shouldAnimate ? "autoplay loop" : ""} style="width: ${size}px;height: ${size}px"></dotlottie-wc>`,
      }}
    />
  );
}
