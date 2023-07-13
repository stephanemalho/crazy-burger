import React from "react";
import styled from "styled-components";

const SelectInput = ({key, options, name, className, id }) => {
  return (
    <SelectInputStyled name={name} className={className} id={id}>
      {options.map(({value , label}) => {
        return (
          <option key={key} value={value} selected={value}>
            {label}
          </option>
        );
      })}
    </SelectInputStyled>
  );
};

export default SelectInput;

const SelectInputStyled = styled.select`
  width: 100%;
  height: 40px;
  
  `;