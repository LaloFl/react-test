import { actions } from "./actions";
import { initialState } from "./constants";

// export function reducer (state = initialState, action) {

// } 


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actions.ADD_2_COUNTER:
    return{
     ...state,
     counter: state.counter +2,
    }; 
    case actions.REST_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.GET_MOVIES_REQUEST:
      return {
        ...state,
        getMovies: {
          ...state.getMovies,
          loading: true,
          error: false,
        },
      };
    case actions.GET_MOVIES_SUCCESS:
      return {
        ...state,
        getMovies: {
          ...state.getMovies,
          loading: false,
          success: true,
          data: action.payload,
        },
      };
    case actions.GET_MOVIES_FAIL:
      return {
        ...state,
        getMovies: {
          ...state.getMovies,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
