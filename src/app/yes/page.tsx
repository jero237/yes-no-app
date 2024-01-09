import Buttons from "@/components/buttons";
import Title from "@/components/title";
import Link from "next/link";
import React from "react";

export default function YesPage() {
  return (
    <main className="container flex flex-col py-4 min-h-screen justify-between items-center">
      <div></div>
      <div className="w-full flex flex-col text-wrap gap-4 px-4">
        <Title
          defaultValue="Yo tambien te amo ❤️"
          searchParam="response"
          isResponse
        />
      </div>
      <Link
        className="py-2 px-4 border rounded-lg shadow-sm transition-all hover:bg-violet-100"
        href="/create"
      >
        Crea tu mensaje personalizado
      </Link>
    </main>
  );
}
