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
        ButtonIcon={
          <AiOutlineDown
            className="iconStyle"
            aria-label="fermer le formulaire"
          />
        }
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
    border: 1px solid ${theme.colors.greySemiDark};
    background-color: white;
    position: absolute;
    width: 60px;
    left: 40px;
    top: 0px;
  }
  .addToForm,
  .editForm {
    border: 1px solid ${theme.colors.greySemiDark};
    color: ${theme.colors.greySemiDark};
    justify-content: space-evenly;
    flex-direction: row-reverse;
    background-color: white;
    position: absolute;
    width: 200px;
    top: 0px;
  }
  .addToForm {
    left: 100px;
  }
  .editForm {
    left: 300px;
  }
  .editForm:hover,
  .addToForm:hover,
  .toggleForm:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
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
