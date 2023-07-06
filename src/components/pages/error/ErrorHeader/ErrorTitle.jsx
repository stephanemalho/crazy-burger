import React from "react";
import { errorPage } from "../../../../utils/variables";
import { ErrorTitleStyled } from "../../../../styled";

function ErrorTitle() {
  return (
    <ErrorTitleStyled>
      <h1 className="title">{errorPage.title}</h1>
      <br />
      <p className="description">{errorPage.description}</p>
    </ErrorTitleStyled>
  );
}

export default ErrorTitle;

