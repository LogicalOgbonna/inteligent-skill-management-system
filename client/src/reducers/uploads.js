import {
  QUESTION_UPLOAD,
  CAREER_UPLOAD,
  UPLOAD_ERRRORS
} from "../actions/types";

const uploads = (state = {}, action = {}) => {
  switch (action.type) {
    case QUESTION_UPLOAD:
      return {
        ...state,
        questions: action.questions
      };
    case CAREER_UPLOAD:
      return {
        ...state,
        careers: action.careers
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
