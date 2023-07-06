import React from "react";
import { ImagePreviewStyled } from "../../../../../../styled";
import { imageState } from "../../../../../../utils/variables";

export default function ImagePreview({ title, imageSource }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <div className="image-box">
          <img src={imageSource} alt={title} />
        </div>
      ) : (
        <div className="preview-container">{imageState.empty}</div>
      )}
    </ImagePreviewStyled>
  );
}
