"use client";

import { useEffect, useState } from "react";
import Speaker from "@/public/icons/speaker.svg";

export default function FirstNameAudio({ src }) {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio(src));
  }, [src]);

  return (
    <button
      className="text-gold-800 hover:text-gold-700 h-5 w-5 duration-300 ease-out translate-y-1 ml-0.5"
      onClick={() => audio.play()}
      aria-label="Listen to first name pronunciation"
    >
      <Speaker aria-hidden />
    </button>
  );
}
