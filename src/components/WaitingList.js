import React from "react";
import styled, { css } from "styled-components";

const WaitingListBlock = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
  }

  input {
    flex: 1;
    font-size: 1.25rem;
  }

  button {
    font-size: 1.25rem;
    padding: 0.5rem;
  }
`;

const WaitingListForm = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const WaitingItemBlock = styled.li`
  display: flex;
  padding: 0.5rem;
  border: 1px solid black;

  & + & {
    border-top: none;
  }

  ${props =>
    props.entered &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <WaitingItemBlock entered={entered}>
      <div>{text}</div>
      <div>
        <button onClick={onEnter}>입장</button>
        <button onClick={onLeave}>나감</button>
      </div>
    </WaitingItemBlock>
  );
};

const WaitingList = ({
  input,
  waitingList,
  onChange,
  onSubmit,
  onEnter,
  onLeave
}) => {
  const waitingItems = waitingList.map(w => (
    <WaitingItem
      key={w.id}
      text={w.name}
      entered={w.entered}
      id={w.id}
      onEnter={() => onEnter(w.id)}
      onLeave={() => onLeave(w.id)}
    />
  ));
  return (
    <WaitingListBlock>
      <h2>대기자 명단</h2>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onChange}
          placeholder="명단을 입력하세요"
        />
        <button>등록</button>
      </form>
      <WaitingListForm>{waitingItems}</WaitingListForm>
    </WaitingListBlock>
  );
};

export default WaitingList;
