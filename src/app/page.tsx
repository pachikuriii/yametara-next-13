import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-orange-200">Top Page</h1>
      <Link href="/questions/1">はじめる</Link>
    </main>
  );
}
