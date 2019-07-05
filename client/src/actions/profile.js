import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_ERRORS,
  PROFILE_CREATED,
  ADD_SUBJECT,
  GET_CAREER
} from "./types";

export const userProfile = profile => ({
  type: GET_PROFILE,
  profile
});

export const errors = error => ({
  type: PROFILE_ERRORS,
  error
});

export const profileCreated = profile => ({
  type: PROFILE_CREATED,
  profile
});

export const subjectAdded = subject => ({
  type: ADD_SUBJECT,
  subject
});

export const getCareer = career => ({
  type: GET_CAREER,
  career
});

export const createPropfile = data => dispatch => {
  console.log("here");
  axios
    .post("/api/profile", data)
    .then(profile => {
      dispatch(profileCreated(profile.data.data));
    })
    .catch(error => error.response && dispatch(errors(error.response.data)));
};

export const addSubject = data => dispatch => {
  axios
    .post("/api/profile/subjects", data)
    .then(subject => {
      dispatch(subjectAdded(subject.data.credential));
      axios.get("/api/career").then(career => {
        dispatch(getCareer(career.data));
      });
    })
    .catch(error => error.response && dispatch(error.response.data));
};
export const getProfile = () => dispatch => {
  axios
    .get("/api/profile")
    .then(profile => {
      console.log(profile.data.data);
      dispatch(userProfile(profile.data.data));
    })
    .catch(error => dispatch(errors(error.response)));
};
