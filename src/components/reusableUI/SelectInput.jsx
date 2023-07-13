import React from "react";
import styled from "styled-components";

const SelectInput = ({
  value,
  options,
  name,
  className,
  id,
  onChange,
  ...restProps
}) => {
  return (
    <SelectInputStyled
      value={value}
      name={name}
      className={className}
      id={id}
      onChange={onChange}
      {...restProps}
    >
      {options.map(({ value, label }) => {
        return (
          <option key={label} value={value}>
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
  border: 1px solid red;
`;
