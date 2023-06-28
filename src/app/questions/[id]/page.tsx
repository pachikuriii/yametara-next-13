"use client";
import Link from "next/link";
import useSWR from "swr";

const Page = ({ params }: { params: { id: string } }) => {
  if (params === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Page for {params.id}</h1>
      <p>{params.id}</p>
      <ul>
        <li>
          <Link href="/questions/1">go to 1</Link>
        </li>
        <li>
          <Link href="/questions/2">go to 2</Link>
        </li>
        <li>
          <Link href="/questions/3">go to 3</Link>
        </li>
      </ul>
      <hr />
      <Content id={params.id} />
    </>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Content({ id }: { id: string }) {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/" + id,
    fetcher
  );
  if (error) return <h1>Failed to load</h1>;
  if (!data) return <h1>Loading...</h1>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
export default Page;
