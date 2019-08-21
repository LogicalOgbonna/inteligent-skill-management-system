import { USER_DESCIPLINE, USER_ERROR  } from './types';

import axios from 'axios';
export const gotUserdescipline = descipline => ({
  type: USER_DESCIPLINE,
  payload: descipline
});

export const errors = error => ({
  type: USER_ERROR,
  payload: error
})

export const userDescipline = data => dispatch => {
  const descipline = data.replace(" ", "_");
  console.log(descipline)
  axios.get(`/api/descipline/${descipline}`).then(data => {
    console.log(data);
    dispatch(gotUserdescipline(data.data))
  }).catch(err => dispatch(errors(err)))
}