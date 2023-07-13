import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { isAvailableOptions, isPublicisedOptions } from "../../../../../../enums/select";

export const getTextInputConfig = (newProduct) => [
  {
    key: "0",
    id: "0",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger className="Icon" />,
    value: newProduct.title,
  },
  {
    key: "1",
    id: "1",
    name: "imageSource",
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill className="Icon" />,
    value: newProduct.imageSource,
  },
  {
    key: "2",
    id: "2",
    name: "price",
    placeholder: "Prix",
    Icon: <MdOutlineEuro className="Icon" />,
    value: newProduct.price ? newProduct.price : "",
  },
];


export const getSelectInputConfig = (newProduct) => [
  {
    key: "03",
    id: "3",
    name: "isAvailable",
    value: newProduct.isAvailable,
    options: isAvailableOptions,
    Icon: <FiPackage />,
    className: "is-available",
  },
  {
    key: "04",
    id: "4",
    name: "isPublicised",
    value: newProduct.isPublicised,
    options: isPublicisedOptions,
    Icon: <GoMegaphone />,
    className: "is-publicised",
  },
]
