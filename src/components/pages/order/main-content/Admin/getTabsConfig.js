import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";


export const getTabConfig = (currentTabSelected, selectTab) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    onClick: () => selectTab("add"),
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    onClick: () => selectTab("edit"),
    className: currentTabSelected === "edit" ? "is-active" : "",
  }
];