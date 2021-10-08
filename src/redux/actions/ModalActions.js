import {
  CLOSED_MODAL_SIGN_IN,
  CLOSED_MODAL_SIGN_UP,
  OPEN_MODAL_SIGN_IN,
  OPEN_MODAL_SIGN_UP,
} from "../constants/ModalConstants";

export const openModalSignUpAction = () => {
  return { type: OPEN_MODAL_SIGN_UP };
};

export const closeModalSignUpAction = () => {
  return { type: CLOSED_MODAL_SIGN_UP };
};

export const openModalSignInAction = () => {
  return { type: OPEN_MODAL_SIGN_IN };
};

export const closeModalSignInAction = () => {
  return { type: CLOSED_MODAL_SIGN_IN };
};
