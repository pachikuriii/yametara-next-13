import { state as initialState } from "@/redux/answerState";

export const answersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return { answer: [...state.answer, action.payload] };
  }
  return state;
};
