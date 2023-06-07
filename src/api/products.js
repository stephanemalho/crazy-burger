import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const addProductToDB = (newMenu, name) => {
  const userInfo = {
    prenom: name,
    productsMenu: newMenu,
  };
  setDoc(doc(db, "users", name), userInfo);
};
