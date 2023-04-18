import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (newCard) => [
  {
    key: "0",
    id: "0",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger className="Icon" />,
    value: newCard.title,
  },
  {
    key: "1",
    id: "1",
    name: "imageSource",
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill className="Icon" />,
    value: newCard.imageSource,
  },
  {
    key: "2",
    id: "2",
    name: "price",
    placeholder: "Prix",
    Icon: <MdOutlineEuro className="Icon" />,
    value: newCard.price ? newCard.price : "",
  },
];
