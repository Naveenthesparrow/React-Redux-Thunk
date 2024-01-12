import { fetchData } from "./actiontype";

const initialState = {
  data: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchData:
      return { ...state, data: payload };
    default:
      return state;
  }
};
