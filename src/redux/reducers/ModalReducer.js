import {
  CLOSED_MODAL_SIGN_IN,
  CLOSED_MODAL_SIGN_UP,
  OPEN_MODAL_SIGN_IN,
  OPEN_MODAL_SIGN_UP,
} from "../constants/ModalConstants";

const initialState = {
  isOpenSignIn: false,
  isOpenSignUp: false,
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL_SIGN_IN:
      state.isOpenSignUp = false;
      state.isOpenSignIn = true;
      return { ...state };

    case CLOSED_MODAL_SIGN_IN:
      state.isOpenSignIn = false;
      state.isOpenSignUp = false;
      return { ...state };

    case OPEN_MODAL_SIGN_UP:
      state.isOpenSignUp = true;
      state.isOpenSignIn = false;
      return { ...state };

    case CLOSED_MODAL_SIGN_UP:
      state.isOpenSignIn = false;
      state.isOpenSignUp = false;
      return { ...state };

    default:
      return state;
  }
};
export { modalReducer };
