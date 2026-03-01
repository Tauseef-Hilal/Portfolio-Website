"use client";

import { useRef, useState, useEffect } from "react";
import { HiMiniSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

export default function BackgroundMusicButton({
  className,
}: {
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/background.mp3");

    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  async function toggleAudio() {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play(); // safer async play
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Playback failed:", err);
    }
  }

  return (
    <button
      onClick={toggleAudio}
      className={`cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
    >
      {isPlaying ? (
        <HiMiniSpeakerWave />
      ) : (
        <HiSpeakerXMark />
      )}
    </button>
  );
}
