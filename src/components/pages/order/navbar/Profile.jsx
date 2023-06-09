import React from "react";
import { UserProfileStyled } from "../../../../styled";

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

export default Profile;
