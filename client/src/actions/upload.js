import axios from "axios";
import {
  QUESTION_UPLOAD,
  ALL_DESCIPLINE,
  DESCIPLINE_UPLOAD,
  UPLOAD_ERRRORS
} from "./types";

export const questionUploaded = questions => ({
  type: QUESTION_UPLOAD,
  questions
});

export const desciplineUploaded = descipline => ({
  type: DESCIPLINE_UPLOAD,
  descipline
});

export const allDescipline = descipline => ({
  type: ALL_DESCIPLINE,
  descipline
});

export const errors = error => ({
  type: UPLOAD_ERRRORS,
  error
});

export const uploadQuestions = data => dispatch => {
  axios
    .post("/api/questions", data)
    .then(question => {
      dispatch(questionUploaded(question.data.data));
    })
    .catch(err => dispatch(errors(err)));
};

export const getDesciplines = () => dispatch => {
  axios.get("api/descipline").then(descipline => {
    dispatch(allDescipline(descipline.data));
  });
};

export const uploadCareers = data => dispatch => {
  axios
    .post("/api/descipline", data)
    .then(descipline => {
      dispatch(desciplineUploaded(descipline.data.descipline));
    })
    .catch(err => dispatch(errors(err)));
};
