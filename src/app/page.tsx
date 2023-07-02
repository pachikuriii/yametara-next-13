import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center">yametara</h1>
      <p>会社を辞めてからの保険/税金の手続き…</p>
      <p>何を、どこへ、いつまでに？</p>
      <Link href="/questions/1">はじめる</Link>
    </>
  );
}
