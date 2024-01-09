import Buttons from "@/components/buttons";
import Title from "@/components/title";

export default function Home() {
  return (
    <main className="container flex min-h-screen justify-center items-center">
      <div className="w-full flex flex-col text-wrap gap-4 px-4">
        <Title defaultValue="Me perdonas?" searchParam="title" />
        <Buttons />
      </div>
    </main>
  );
}
