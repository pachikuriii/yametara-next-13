import Link from "next/link";

const Result = () => {
  return (
    <>
      <main>
        <p>結果ページ</p>
        <Link href="/" className="underline">
          TOPへ
        </Link>
      </main>
    </>
  );
};

export default Result;
