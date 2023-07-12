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
                className={input.name}
              />
            );
          })}
          <select name="isAvailable" className="is-available" id="3">
            <option value={true}>En Stock</option>
            <option value={false}>Épuisé</option>
          </select>
          <select name="isPublised" className="is-publised" id="4">
            <option value={true}>Sans pub</option>
            <option value={false}>Avec pub</option>
          </select>
          <div className="form-cta">{onSubmit ? submitButton : hintMessage}</div>
        </div>
      </FormStyled>
    );
  }
);

export default Form;

