import React from "react";

import TextInput from "../../../../../reusableUI/TextInput";
import ImagePreview from "./ImagePreview";
import {  getTextInputConfig, getSelectInputConfig } from "./inputConfig";
import { FormStyled } from "../../../../../../styled";
import SelectInput from "../../../../../reusableUI/SelectInput";

const Form = React.forwardRef(
  (
    { onSubmit, onBlur, onFocus, onChange, product, submitButton, hintMessage },
    ref
  ) => {
    const inputTexts = getTextInputConfig(product);
    const inputSelects = getSelectInputConfig(product);

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
          {inputSelects.map((inputSelect) => (
            <SelectInput
              {...inputSelect}
              key={inputSelect.key}
              onChange={onChange}
            />
          ))}
          <div className="form-cta">
            {onSubmit ? submitButton : hintMessage}
          </div>
        </div>
      </FormStyled>
    );
  }
);

export default Form;
