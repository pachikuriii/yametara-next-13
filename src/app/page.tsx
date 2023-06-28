import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Index page</h1>
      <hr />
      <ul>
        <li>
          <Link href="/questions/1">go to 1</Link>
        </li>
        <li>
          <Link href="/questions/2">go to 2</Link>
        </li>
      </ul>
    </>
  );
}
