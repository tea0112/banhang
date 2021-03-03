import { SET_CATAGORIES } from '../constants/ActionTypes';

const initialState = {
  catagories: null,
};

const catagory = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATAGORIES:
      return {
        ...state,
        catagories: action.payload,
      };
    default:
      return state;
  }
};

export default catagory;
