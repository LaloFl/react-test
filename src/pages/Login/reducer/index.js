import { actions } from "./actions";
import { initialState } from "./constants";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_FORM:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          success: false,
          error: null,
        },
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          success: true,
          data: action.payload,
        },
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
