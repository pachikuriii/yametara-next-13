import { Answer } from "@/type/answer.type";
export const addAnswerAction = (newAnswer: Answer) => {
  return {
    type: "ADD_ANSWER",
    payload: newAnswer,
  };
};
