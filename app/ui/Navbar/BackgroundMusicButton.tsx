"use client";

import { useRef, useState, useEffect } from "react";
import { HiMiniSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

export default function BackgroundMusicButton({
  className,
}: {
  className: string;
}) {
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [playerState, setPlayerState] = useState<"playing" | "paused">(
    "paused"
  );

  useEffect(() => {
    if (!audioPlayerRef.current) {
      audioPlayerRef.current = new Audio("/music/background.mp3");
    }
  }, []);

  function toggleAudio() {
    if (!audioPlayerRef.current) {
      return;
    }

    if (playerState == "playing") {
      audioPlayerRef.current.pause();
      setPlayerState("paused");
    } else {
      audioPlayerRef.current.play();
      setPlayerState("playing");
    }
  }
  return (
    <>
      {playerState == "paused" ? (
        <HiSpeakerXMark
          onClick={toggleAudio}
          className={`cursor-pointer ${className}`}
        />
      ) : (
        <HiMiniSpeakerWave
          onClick={toggleAudio}
          className={`cursor-pointer ${className}`}
        />
      )}
    </>
  );
}
