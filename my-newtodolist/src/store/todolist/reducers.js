import { handleActions } from "redux-actions";
const init = [
    { id: 0, text: "HTML", done: false },
    { id: 1, text: "CSS", done: true },
    { id: 2,done: false, text: "JS",  }
  ];

  export const gettodolist=h