import { USER_ERROR, USER_DESCIPLINE } from '../actions/types';


const User = (state ={ descipline: []}, action={}) => {
  switch (action.type) {
    case USER_DESCIPLINE:
      return {
        ...state,
        descipline: action.payload
      }
  
    default:
      return state;
  }
}

export default User;