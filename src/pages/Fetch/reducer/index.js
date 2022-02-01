import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MOVIES_REQUEST:
      return {
        ...state,
        getMovies: {
          ...state.getMovies,
          loading: true,
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
          error: null
        },
      };
    case actions.GET_MOVIES_FAILURE:
      return {
        ...state,
        getMovies: {
          ...state.getMovies,
          error: action.payload,
          data: [],
          success: false,
          loading: false,
        },
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
