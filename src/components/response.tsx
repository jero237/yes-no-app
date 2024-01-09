"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Response() {
  const searchParams = useSearchParams();

  return (
    <h1 className="text-2xl font-bold text-red-700">
      {searchParams?.get("response") || "Yo tambien te amo"}
    </h1>
  );
}
