import React from "react";
import styled from "styled-components";
import PaletteContainer from "../containers/PaletteContainer";
import CounterContainer from "../containers/CounterContainer";
import WaitingListContainer from "../containers/WaitingListContainer";

const AppBlock = styled.div`
  width: 712px;
  height: 712px;
  margin: 0 auto;
  margin-top: 4rem;
`;

function CounterWaitPage() {
  return (
    <AppBlock>
      <PaletteContainer />
      <CounterContainer />
      <WaitingListContainer />
    </AppBlock>
  );
}

export default CounterWaitPage;
