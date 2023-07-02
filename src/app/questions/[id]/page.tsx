"use client";
import useSWR from "swr";
import PrevNextButtons from "@/components/questions/prevNextButtons";
import { Answer } from "@/type/answer.type";
import { useDispatch } from "react-redux";

const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();

  if (params === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-2xl text-center">{params.id}</h1>
      <button className="text-2xl">{params.id}</button>
      <PrevNextButtons id={params.id} />
    </>
  );
};

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// function Content({ id }: { id: string }) {
//   const { data, error } = useSWR(
//     "https://jsonplaceholder.typicode.com/todos/" + id,
//     fetcher
//   );
//   if (error) return <h1>Failed to load</h1>;
//   if (!data) return <h1>Loading...</h1>;
//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// }

export default Page;
