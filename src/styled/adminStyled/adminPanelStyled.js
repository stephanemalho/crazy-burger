import styled from "styled-components";
import { theme } from "../../assets/theme";

const AdminPanelStyled = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;

export default AdminPanelStyled;
