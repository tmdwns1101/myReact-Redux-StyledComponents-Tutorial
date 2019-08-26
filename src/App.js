import React from "react";
import { Route, Link } from "react-router-dom";
import CouterWaitPage from "./pages/CouterWaitPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">카운터 페이지</Link>
        </li>
        <li>
          <Link to="/movie">영화 페이지</Link>
        </li>
      </ul>
      <Route path="/" component={CouterWaitPage} exact />
      <Route path="/movie" component={MoviePage} />
    </>
  );
}

export default App;
