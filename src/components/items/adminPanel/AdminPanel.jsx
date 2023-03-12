import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../reusableUI/PrimaryButton";
import { HiPencil } from "react-icons/hi";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../assets/theme";

export default function AdminPanel() {
  return (
    <AdminFormStyled>
      <PrimaryButton
        className="toggleForm"
        ButtonIcon={<AiOutlineDown 
        className="iconStyle" aria-label="fermer le formulaire"
        />}
      />
      <PrimaryButton
        label={"Ajouter un produit"}
        className="addToForm"
        ButtonIcon={<AiOutlinePlus className="iconStyle" />}
      />
      <PrimaryButton
        label={"Modifier un produit"}
        className="editForm"
        ButtonIcon={<HiPencil className="iconStyle" />}
      />
      <form>
        <p>Ajouter un produit</p>
      </form>
    </AdminFormStyled>
  );
}

const AdminFormStyled = styled.div`
  font-family: "Open Sans", sans-serif;
  background-color: transparent;
  position: absolute;
  height: 240px;
  width: 100%;
  bottom: 0;
  form {
    position: absolute;
    border-top: 1px solid ${theme.colors.greySemiDark};
    background-color: white;
    width: 100%;
    height: 80%;
    bottom: 0px;
    p {
      padding-left: 20px;
    }
  }
  .toggleForm {
    position: absolute;
    top: 0px;
    left: 40px;
    width: 60px;
    border: 1px solid ${theme.colors.greySemiDark};
    background-color: white;
  }
  .addToForm {
    position: absolute;
    top: 0px;
    left: 100px;
    width: 200px;
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greySemiDark};
    background-color: white;
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
  .editForm {
    position: absolute;
    top: 0px;
    left: 300px;
    width: 200px;
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greySemiDark};
    background-color: white;
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
  .editForm:hover,
  .addToForm:hover,
  .toggleForm:hover {
    color: white;
    background-color: black;
    border: 1px solid black;
    .iconStyle {
      color: white;
    }
  }
  button span {
    position: relative;
    left: 0;
  }
  .iconStyle {
    color: ${theme.colors.greySemiDark};
    height: 16px;
    width: 16px;
    padding: 0;
    margin: 0;
  }
`;
