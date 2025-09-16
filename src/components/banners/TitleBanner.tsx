import React from "react";
import { TitleBannerProps } from "@/types";

export default function TitleBanner({
  title,
  backgroundImage,
  className = "",
}: TitleBannerProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <div
      className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white ${className}`}
      style={backgroundStyle}
    >
      <div className="max-w-7xl h-[22vh] flex items-center mx-auto px-4">
        <div className="">
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
