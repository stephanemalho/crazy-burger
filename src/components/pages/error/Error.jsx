import React from "react";
import { useNavigate } from "react-router-dom";

import { errorPage } from "../../../utils/variables";
import MainButton from "../../reusableUI/MainButton";
import ErrorTitle from "./ErrorHeader/ErrorTitle";
import { ErrorPageStyled } from "../../../styled";
import { redirectToLoginPage } from "../../../utils/window";

export default function Error() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    redirectToLoginPage(e, navigate);
  };

  return (
    <ErrorPageStyled>
      <ErrorTitle />
      <MainButton label={errorPage.notFound} onClick={handleClick} />
    </ErrorPageStyled>
  );
}
