import styled from "styled-components/macro";
import { theme } from "../../assets/theme";

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 36px;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .inputs-field {
    /* background-color: blue; */
    grid-area: 1/2/-2/3;
    /* border-radius: ${theme.borderRadius.round}; */
    display: grid;
    padding: 20px 0 10px 0;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    width: 80%;
  }
  .title {
    grid-area: 1/1/2/4;
  }
  .imageSource {
    grid-area: 2/1/3/4;
  }
  .price {
    grid-area: 3/1/-1/2;
  }
  .form-cta {
    margin-top: 20px;
    grid-area: 4/1/-1/4;
  }
  .is-available {
    grid-area: 3/2/4/3;
    height: 36px;
    background-color:pink;
  }
  .is-publised {
    grid-area: 3/3/4/4;
    background-color: wheat;
  }
`;

export default FormStyled;