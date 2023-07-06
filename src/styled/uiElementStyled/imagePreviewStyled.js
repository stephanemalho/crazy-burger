import styled from "styled-components";
import { theme } from "../../assets/theme";

// const previewAnimation = css`
//   .preview-animation-enter {
//     ${theme.animations.slideInRight.from};
//     ${theme.animations.fadeIn.from};
//   }
//   .preview-animation-enter-active {
//     ${theme.animations.transition.medium};
//     ${theme.animations.slideInRight.to};
//     ${theme.animations.fadeIn.to};
//   }
//   .preview-animation-exit {
//     ${theme.animations.fadeOut.from};
//   }
//   .preview-animation-exit-active {
//     ${theme.animations.transition.medium};
//     ${theme.animations.fadeOut.to};
//     ${theme.animations.slideOutLeft.to};
//   }

// `

const ImagePreviewStyled = styled("div")`
  font-family: "open sans", sans-serif;
  color: ${theme.colors.greyMedium};
  grid-area: 1/1/4/2;
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: auto;
  padding: 20px 20px 0 50px;
  height: 130px;
  width: 130px;
  .preview-container {
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
    height: 100px;
    margin: auto;
    img {
      width: 100px;
      height: 100px;
      object-fit: contain; 
    }
  }
`;

export default ImagePreviewStyled;
