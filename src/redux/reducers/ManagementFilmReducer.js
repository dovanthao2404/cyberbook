import * as ManagementFilmType from "./../constants/ManagementFilmConstants";

const initialState = {
  listBanner: [],
  listFilm: [],
  listFilmDefault: [],
  listFilmNowShowing: [],
  listFilmComingSoon: [],
  showtimes: {},
  infoFilm: {},
  error: null,
  isLoading: false,
  addFilm: false,
};

const managementFilmReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ManagementFilmType.SET_LIST_BANNER:
      state.listBanner = payload;
      return { ...state };

    case ManagementFilmType.SET_LIST_FILM:
      state.listFilm = payload;
      state.listFilmDefault = payload;

      state.listFilmNowShowing = payload.filter((film) => {
        return film.dangChieu === true;
      });

      state.listFilmComingSoon = payload.filter((film) => {
        return film.sapChieu === true;
      });

      return { ...state };
    case ManagementFilmType.SET_SHOWTIMES:
      state.showtimes = payload;
      return { ...state };

    case ManagementFilmType.SET_INFO_FILM:
      state.infoFilm = payload;
      return { ...state };
    case ManagementFilmType.FILM_REQUEST:
      state.error = null;
      state.isLoading = true;
      return { ...state };
    case ManagementFilmType.FILM_SUCCESS:
      state.error = null;
      state.isLoading = false;
      return { ...state };
    case ManagementFilmType.FILM_FAILED:
      state.error = payload;
      state.isLoading = false;
      return { ...state };
    case ManagementFilmType.SET_ADD_FILM_SUCCESS:
      state.addFilm = payload;
      return { ...state };
    default:
      return state;
  }
};

export { managementFilmReducer };
