"use client";
import useSWR from "swr";
import PrevNextButtons from "@/components/questions/prevNextButtons";
import { Answer } from "@/type/answer.type";
import { useDispatch } from "react-redux";
import { addAnswerAction } from "@/redux/answersAction";
const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();

  if (params === null) {
    return <h1>Loading...</h1>;
  }

  const addAnswer = (id: number, name: string) => {
    const newAnswer: Answer = {
      id: id,
      name: name,
    };
    dispatch(addAnswerAction(newAnswer));
  };

  // const onClick = () => {
  //   console.log(params.id);
  // };

  return (
    <>
      <h1 className="text-2xl text-center">{params.id}</h1>
      <button onClick={() => addAnswer(3, "Goro")} className="text-2xl">
        {params.id}
      </button>
      <PrevNextButtons id={params.id} />
      {/* <Content id={params.id} /> */}
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
