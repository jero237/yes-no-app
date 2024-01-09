"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Buttons() {
  const [position, setPosition] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRandomPosition = () => {
    const x = Math.floor(Math.random() * 35);
    const y = Math.floor(Math.random() * 35);
    const xSign = Math.random() > 0.5 ? "-" : "";
    const ySign = Math.random() > 0.5 ? "-" : "";
    console.log("change position", x, y);
    setPosition(`${xSign}${x}vw ${ySign}${y}vh`);
  };

  const handleYes = () => {
    const path = "/yes";
    const response = searchParams?.get("response")
    if (response) {
      return router.push(`${path}?response=${response}`);
    }
    return router.push("/yes")
  }

  return (
    <div className="flex gap-4 justify-center">
      <button onClick={handleYes} className="py-2 px-4 bg-green-300 rounded-lg shadow-sm transition-all duration-1000">
        Si
      </button>
      <button
        onMouseEnter={handleRandomPosition}
        onClick={handleRandomPosition}
        className={"py-2 px-4 bg-red-300 rounded-lg shadow-sm transition-all"}
        style={{
          translate: position,
        }}
      >
        No
      </button>
    </div>
  );
}
