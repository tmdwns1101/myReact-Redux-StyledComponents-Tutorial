import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import MovieContainer from "../containers/MovieContainer";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: #eff3f7;
        height: 100%;
    }
`;

const AppBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

function MoviePage() {
  return (
    <>
      <GlobalStyle />
      <AppBlock>
        <MovieContainer />
      </AppBlock>
    </>
  );
}

export default MoviePage;
