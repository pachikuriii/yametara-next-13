import actionTypes from "@/type/action.type";
export const addRetirementDate = (date: string) => {
  return {
    type: actionTypes.ADD_RETIREMENT_DATE,
    payload: date,
  };
};
