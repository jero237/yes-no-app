"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Title({ searchParam, defaultValue, isResponse }: { searchParam: string, defaultValue: string, isResponse?: boolean}) {
  const searchParams = useSearchParams();

  return (
    <h1 className={`text-center break-words text-wrap text-3xl font-bold ${isResponse && "text-red-700"}`}>
      {searchParams?.get(searchParam)|| defaultValue}
    </h1>
  );
}
