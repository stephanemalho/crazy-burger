import styled from "styled-components";

const MainMenuStyled = styled.div`
  height: calc(95vh - 10vh);
  flex: 1;
  display:grid;
  grid-template-columns: 1fr 3fr;
  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    height: 100%;
    width: 100%;
  }
`;

export default MainMenuStyled;