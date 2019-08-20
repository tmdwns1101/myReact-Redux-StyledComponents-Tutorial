import React from "react";
import styled from "styled-components";

const CounterBlock = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${props => props.color};
  }
`;

function Counter({ value, color, onIncrement, onDecrement }) {
  return (
    <CounterBlock color={color}>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </CounterBlock>
  );
}

Counter.defaultProps = {
  color: "black"
};

export default Counter;
