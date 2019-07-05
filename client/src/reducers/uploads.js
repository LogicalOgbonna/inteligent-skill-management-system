import {
  QUESTION_UPLOAD,
  DESCIPLINE_UPLOAD,
  UPLOAD_ERRRORS,
  ALL_DESCIPLINE
} from "../actions/types";

const uploads = (state = {}, action = {}) => {
  switch (action.type) {
    case QUESTION_UPLOAD:
      return {
        ...state,
        questions: action.questions
      };
    case DESCIPLINE_UPLOAD:
      return {
        ...state,
        descipline: action.descipline
      };
    case ALL_DESCIPLINE:
      return {
        ...state,
        allDescipline: action.descipline
      };
    case UPLOAD_ERRRORS:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default uploads;
