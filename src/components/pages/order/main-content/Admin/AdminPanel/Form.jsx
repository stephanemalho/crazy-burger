import React from "react";
import styled from "styled-components";

import { theme } from "../../../../../../assets/theme";
import TextInput from "../../../../../reusableUI/TextInput";
import ImagePreviou from "./ImagePreviou";
import SuccessBox from "./SuccessBox";
import { getInputTextConfig } from "./getInputTextConfig";


export default function Form({onSubmit, onChange, product, isSubmited}) {


  // test link to add a card 
  /*
  https://media.auchan.fr/P02000000001KLRPRIMARY_2048x2048/B2CD/
  */
  const inputTexts = getInputTextConfig(product); 

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreviou title={product.title} imageSource={product.imageSource} />
      <div className="inputs-field">
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              value={product[input.name]}
              onChange={onChange}
              version="admin"
            />
          );
        })}
      </div>
      <SuccessBox isSubmited={isSubmited} /> {/** Button & message success*/}
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  padding-top: 5px;

  .inputs-field {
    grid-area: 1/2/4/3;
    border-radius: ${theme.borderRadius.round};
    display: grid;
    padding: 20px 0 10px 0;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    width: 80%;
  }
`;
