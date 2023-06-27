import Link from "next/link";
export default function Home() {
  return (
    <main>
      <p>結果ページ</p>
      <Link href="/" className="underline">
        TOPへ
      </Link>
    </main>
  );
}
