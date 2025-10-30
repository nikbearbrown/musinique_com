"use client";

import React from "react";

interface VideoThumbnailProps {
  title: string;
  videoId: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ title, videoId }) => (
  <a
    href={`https://www.youtube.com/watch?v=${videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="relative">
      <div className="rounded-lg overflow-hidden w-full" style={{ aspectRatio: "9/16" }}>
        {/* Using a next/image would be better, but since we're using an img tag directly */}
        {/* We'll use a pattern that doesn't require client-side event handlers */}
        <picture>
          <source srcSet={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} />
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover object-center transition"
          />
        <div className="absolute inset-0 bg-black/40 rounded-lg shadow-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.92)" />
            <polygon points="22,18 22,38 40,28" fill="#111" />
          </svg>
        </div>
      </div>
    </div>
    <div className="mt-2 font-semibold text-center">{title}</div>
  </a>
);

export default VideoThumbnail;
