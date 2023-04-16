import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext';
import styled from 'styled-components';
import { theme } from '../../../../../../assets/theme';

export default function ImagePreviou({ title, imageSource}) {

  const { newCard } = useContext(OrderContext);

  return (
    <ImagePreviouStyled >
        {newCard.imageSource ? (
          <div className="previous-box">
            <img src={imageSource} alt={title} />
          </div>
        ) : (
          <div className="previous-box">Aucune image</div>
        )}
      </ImagePreviouStyled>
  )
}

const ImagePreviouStyled = styled.div`
    font-family: "open sans", sans-serif;
    color: ${theme.colors.greyMedium};
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    margin: 20px auto;
    height: 140px;
    width: 70%;
    border: 1px solid ${theme.colors.greyLight};
    .previous-box {
      width: 150px;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `;
