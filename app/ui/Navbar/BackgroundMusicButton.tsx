"use client";

import { useRef, useState } from "react";
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

  function toggleAudio() {
    if (!audioPlayerRef.current) {
      audioPlayerRef.current = new Audio("/music/background.mp3");
      audioPlayerRef.current.onended = (_) => {
        audioPlayerRef.current?.play();
      };
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
