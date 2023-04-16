import React from 'react'
import SucessButton from "../../../../../reusableUI/MainButton";
import styled from 'styled-components';
import { theme } from '../../../../../../assets/theme';

export default function SuccessMessage({ label, Icon , isSubmited}) {
  return (
    <SucessMessageStyled className="submit-box">
        <SucessButton
          className={"submit-button"}
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        <div className="sucess-message">
          {isSubmited && (
            <small className="message">
              {Icon}{" "}{label}
            </small>
          )}
        </div>
      </SucessMessageStyled>
  )
}

const SucessMessageStyled = styled.div`
    display: grid;
    grid-area: 4/-2/-1/-1;
    justify-content: left;
    align-items: start;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-items: start;
    width: 60%;
    .sucess-message {
      margin-left: 5px;
      font-family: "open sans", sans-serif;
      align-items: center;
      display: flex;
      height: 60%;
      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }
      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.XS};
        color: ${theme.colors.success};
      }
    }
`;