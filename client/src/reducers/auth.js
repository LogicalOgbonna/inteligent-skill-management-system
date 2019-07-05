import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_CREATED,
  AUTH_ERRORS,
  GET_TEST,
  TEST_ERRORS,
  GET_PROFILE,
  PROFILE_ERRORS,
  PROFILE_CREATED,
  ADD_SUBJECT,
  GET_CAREER,
  RIASEC
} from "../actions/types";
import _ from "lodash";

const initialState = {
  user: {},
  isAuthenticated: false
};
const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
        isAuthenticated: !_.isEmpty(action.user)
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      };
    case USER_CREATED:
      return {
        ...state,
        user: action.user
      };
    case AUTH_ERRORS:
      return {
        ...state,
        authError: action.error
      };
    case GET_TEST:
      return {
        ...state,
        tests: action.test
      };
    case TEST_ERRORS:
      return {
        ...state,
        testError: action.error
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case PROFILE_ERRORS:
      return {
        ...state,
        profileError: action.error
      };
    case PROFILE_CREATED:
      return {
        ...state,
        profile: action.profile
      };
    case ADD_SUBJECT:
      return {
        ...state,
        subjects: action.subject
      };
    case GET_CAREER:
      return {
        ...state,
        career: action.career
      };
    case RIASEC:
      return {
        ...state,
        riasec: action.riasec
      };
    default:
      return state;
  }
};

export default User;
