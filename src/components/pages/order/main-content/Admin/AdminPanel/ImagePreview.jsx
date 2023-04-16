import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";
import { OrderContext } from "../../../../../../contexts/OrderContext";

export default function ImagePreview({ title, imageSource}) {

  const { newCard } = useContext(OrderContext);

  return (
    <ImagePreviewStyled >
        {newCard.imageSource ? (
          <div className="image-box">
            <img src={imageSource} alt={title} />
          </div>
        ) : (
          <div className="previews-box">Aucune image</div>
        )}
      </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
    font-family: "open sans", sans-serif;
    color: ${theme.colors.greyMedium};
    grid-area: 1/1/4/2;
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: auto;
    padding: 20px 20px 0 50px;
    height: 120px;
    width: 215px;
    .previews-box {
      border: 1px solid ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};
      width: 100%;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .image-box {
      width: 100px;
      display: flex;
      height: 100%;
    }
    `;
