import React from "react";

import TextInput from "../../../../../reusableUI/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextConfig } from "./getInputTextConfig";
import { FormStyled } from "../../../../../../styled";

const Form = React.forwardRef(
  ({ onSubmit,onBlur,onFocus, onChange, product, submitButton, hintMessage }, ref) => {
    const inputTexts = getInputTextConfig(product);
    
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview title={product.title} imageSource={product.imageSource} />
        <div className="inputs-field">
          {inputTexts.map((input) => {
            return (
              <TextInput
                {...input}
                value={product[input.name]}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                version="admin"
                ref={ref && input.name === "title" ? ref : null}
              />
            );
          })}
          {onSubmit ? submitButton : hintMessage}
        </div>
      </FormStyled>
    );
  }
);

export default Form;

