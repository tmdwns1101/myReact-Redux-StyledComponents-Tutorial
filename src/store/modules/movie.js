import { createAction, handleActions } from "redux-actions";

const ISLOADING = "movie/ISLOADING";
const CHANGE_DATA = "movie/CHANGE_DATA";

export const isLoading = createAction(ISLOADING, isLoading => isLoading);
export const changeData = createAction(CHANGE_DATA, data => data);

const initialState = {
  isLoading: true,
  movies: []
};

export default handleActions(
  {
    [ISLOADING]: (state, action) => ({
      ...state,
      isLoading: action.payload
    }),
    [CHANGE_DATA]: (state, action) => ({
      ...state,
      movies: action.payload
    })
  },
  initialState
);
