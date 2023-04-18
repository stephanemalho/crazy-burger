import React from "react";
import styled from "styled-components";

import { theme } from "../../../../assets/theme";

function Profile({ userName, onClick, className, Icon, label, sayHi }) {
  return (
    <UserProfileStyled className={className}>
      <div>
        <h2>
          <span>{sayHi}</span> {userName}
        </h2>
        <button onClick={onClick}>{label}</button>
      </div>
      {Icon}
    </UserProfileStyled>
  );
}

const UserProfileStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    padding-left: 5px;
    color: ${theme.colors.primary};
    span {
      color: ${theme.colors.greyDark};
    }
  }
  button {
    border-style: none;
    background-color: transparent;
    color: ${theme.colors.greyDark};
    :hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  }
`;

export default Profile;
