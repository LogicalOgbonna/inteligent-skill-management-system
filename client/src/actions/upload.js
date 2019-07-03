import axios from "axios";
import { QUESTION_UPLOAD, CAREER_UPLOAD, UPLOAD_ERRRORS } from "./types";

export const questionUploaded = questions => ({
  type: QUESTION_UPLOAD,
  questions
});

export const careersUploaded = careers => ({
  type: CAREER_UPLOAD,
  careers
});

export const errors = error => ({
  type: UPLOAD_ERRRORS,
  error
});

export const uploadQuestions = data => dispatch => {
  axios
    .post("/api/question", data)
    .then(question => {
      dispatch(questionUploaded(question.data.data));
    })
    .catch(err => dispatch(errors(err)));
};

export const uploadCareers = data => dispatch => {
  axios
    .post("/api/career", data)
    .then(careers => {
      dispatch(careersUploaded(careers.data.career));
    })
    .catch(err => dispatch(errors(err)));
};
