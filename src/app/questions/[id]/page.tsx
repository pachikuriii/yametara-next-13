"use client";
import Link from "next/link";
import useSWR from "swr";
import PrevNextButtons from "@/components/questions/prevNextButtons";

const Page = ({ params }: { params: { id: string } }) => {
  if (params === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1 className="text-2xl text-center">{params.id}</h1>

      <Content id={params.id} />

      <PrevNextButtons id={params.id} />
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
