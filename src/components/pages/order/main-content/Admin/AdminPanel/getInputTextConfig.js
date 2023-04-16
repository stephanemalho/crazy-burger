import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (newCard) => [
  {
    key: "0",
    id: "0",
    name: "title",
    placeholder: "Nom du produit",
    Icon: <FaHamburger className="Icon" />,
    value: newCard.title,
  },
  {
    key: "1",
    id: "1",
    name: "imageSource",
    placeholder: "URL de l'image",
    Icon: <BsFillCameraFill className="Icon" />,
    value: newCard.imageSource,
  },
  {
    key: "2",
    id: "2",
    name: "price",
    placeholder: "prix",
    Icon: <MdOutlineEuro className="Icon" />,
    value: newCard.price ? newCard.price : "",
  },
];
