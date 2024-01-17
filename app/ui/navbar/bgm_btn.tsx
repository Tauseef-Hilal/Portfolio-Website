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
    audioPlayerRef.current ??= new Audio("/bgm.mp3");

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
      {playerState == "playing" ? (
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
