import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { formType } from "../../../../../utils/variables";


export const getTabConfig = (currentTabSelected, selectTab) => [
  {
    index: formType.add,
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    onClick: () => selectTab(formType.add),
    className: currentTabSelected === formType.add ? "is-active" : "",
    
  },
  {
    index: formType.edit,
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    onClick: () => selectTab(formType.edit),
    className: currentTabSelected === formType.edit ? "is-active" : "",
  }
];