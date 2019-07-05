import axios from "axios";
import { GET_TEST, TEST_ERRORS, RIASEC } from "./types";

export const allTest = test => ({
  type: GET_TEST,
  test
});

export const errors = error => ({
  type: TEST_ERRORS,
  error
});

export const riasecPersonality = riasec => ({
  type: RIASEC,
  riasec
});

export const getTest = () => dispatch => {
  axios
    .get("/api/question")
    .then(question => {
      dispatch(allTest(question.data.questions));
    })
    .catch(error => dispatch(errors(error.response)));
};

export const getPersonality = data => dispatch => {
  axios
    .get(`/api/career/code/${data}`)
    .then(code => {
      dispatch(riasecPersonality(code.data));
    })
    .catch(error => dispatch(errors(error)));
};
