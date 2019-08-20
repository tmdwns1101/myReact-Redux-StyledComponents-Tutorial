import { combineReducers } from "redux";
import counter from "./counter";
import waiting from "./waiting";

export default combineReducers({
  counter,
  waiting
  //다른 리듀서들을 만들게 되면 여기에 넣어줌
});
