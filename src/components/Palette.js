import React from "react";
import styled, { css } from "styled-components";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const PaletteBlock = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const PaletteList = styled.div`
  display: flex;
`;

const PaletteItem = styled.div`
  border-radius: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border: 2px solid white;
  opacity: 0.5;
  background: ${props => props.color};

  &:hover {
    opacity: 0.9;
  }
  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}

  &+& {
    margin-left: 0.5rem;
  }
`;

function Palette({ selected, onSelect }) {
  return (
    <PaletteBlock>
      <h1>색을 골라주세요!</h1>
      <PaletteList>
        {colors.map(color => (
          <PaletteItem
            onClick={() => onSelect(color)}
            color={color}
            key={color}
            active={selected === color}
          />
        ))}
      </PaletteList>
    </PaletteBlock>
  );
}

Palette.defaultProps = {
  selected: "red"
};

export default Palette;
