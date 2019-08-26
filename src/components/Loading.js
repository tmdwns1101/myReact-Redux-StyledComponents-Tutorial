import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

const LoadingBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  margin-left: -50%;
  margin-top: -50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  margin: 0 auto;
`;

function Loading() {
  const classes = useStyles();

  return (
    <LoadingBlock>
      <CircularProgress className={classes.progress} />
    </LoadingBlock>
  );
}

export default Loading;
