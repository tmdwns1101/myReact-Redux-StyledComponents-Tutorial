import { combineReducers } from "redux";
import counter from "./counter";
import waiting from "./waiting";
import movie from "./movie";

export default combineReducers({
  counter,
  waiting,
  movie
  //다른 리듀서들을 만들게 되면 여기에 넣어줌
});
