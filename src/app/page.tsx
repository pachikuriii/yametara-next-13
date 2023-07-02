import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";

export default function Home() {
  // const count = useSelector((state: RootState) => state.count);
  // const dispatch = useDispatch;
  // const increment = () => {
  //   dispatch();
  // };
  const saveToSessionStorage = () => {
    sessionStorage.setItem("yametara", count.toString());
  };
  return (
    <>
      <h1 className="text-3xl text-center">yametara</h1>

      <Link href="/questions/1">はじめる</Link>
    </>
  );
}
