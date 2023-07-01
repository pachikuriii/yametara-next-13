import Link from "next/link";
import { Answer } from "@/type/answer.type";

type AnswerPresenterProps = {
  answers: Answer;
};

const Result: React.FC<AnswerPresenterProps> = ({ answers }) => {
  return (
    <>
      <main>
        <p>結果ページ</p>
        <p>{answers.name}</p>
        <Link href="/" className="underline">
          TOPへ
        </Link>
      </main>
    </>
  );
};

export default Result;
