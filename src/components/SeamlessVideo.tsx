"use client";

import { useEffect, useRef, useState } from "react";

interface SeamlessVideoProps {
  src: string;
  className?: string;
  crossfadeDuration?: number; // in seconds
  playbackRate?: number; // Keep at 1.0 for 1x normal speed
}

export default function SeamlessVideo({
  src,
  className = "absolute inset-0 w-full h-full object-cover z-0",
  crossfadeDuration = 2.0,
  playbackRate = 1.0,
}: SeamlessVideoProps) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  
  // Active video index: 1 or 2
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const isTransitioningRef = useRef(false);

  // Set 1x normal playback speed
  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (v1) v1.playbackRate = playbackRate;
    if (v2) v2.playbackRate = playbackRate;
  }, [playbackRate, activeVideo]);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    v1.playbackRate = playbackRate;
    v2.playbackRate = playbackRate;

    // Start playing video 1 initially at 1x speed
    v1.play().catch(() => {});

    const handleTimeUpdate = () => {
      if (isTransitioningRef.current) return;

      const currentVideo = activeVideo === 1 ? v1 : v2;
      const nextVideo = activeVideo === 1 ? v2 : v1;

      if (currentVideo.duration && currentVideo.currentTime >= currentVideo.duration - crossfadeDuration) {
        isTransitioningRef.current = true;
        
        // Prepare and start next video at 1x speed
        nextVideo.currentTime = 0;
        nextVideo.playbackRate = playbackRate;
        nextVideo.play().then(() => {
          setActiveVideo(activeVideo === 1 ? 2 : 1);
          
          // Reset transition lock after crossfade completes
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, crossfadeDuration * 1000);
        }).catch(() => {
          isTransitioningRef.current = false;
        });
      }
    };

    const interval = setInterval(handleTimeUpdate, 100);
    return () => clearInterval(interval);
  }, [activeVideo, crossfadeDuration, playbackRate]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Video Layer 1 */}
      <video
        ref={video1Ref}
        muted
        playsInline
        className={`${className} transition-opacity duration-[1500ms] ease-in-out ${
          activeVideo === 1 ? "opacity-100" : "opacity-0"
        }`}
        src={src}
      />

      {/* Video Layer 2 */}
      <video
        ref={video2Ref}
        muted
        playsInline
        className={`${className} transition-opacity duration-[1500ms] ease-in-out ${
          activeVideo === 2 ? "opacity-100" : "opacity-0"
        }`}
        src={src}
      />
    </div>
  );
}
