import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const callToDB = async (newMenu, name, errorMessage ) => {
  const message = errorMessage;
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  try {
    const docRef = doc(db, "users", name);
    await setDoc(docRef, userInfo);
  } catch (error) {
    console.error( message, error);
  }
}
//C
export const addProductToDB = (newMenu, name) => {
  callToDB(newMenu, name, "Error adding menu data:");
  return newMenu;
};
//R
export const getProductsMenu = async (name) => {
  try {
    const productsMenu = await getDoc(doc(db, "users", name));
    if (productsMenu.exists()) {
      return productsMenu.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting menu data:", error);
    return null;
  }
};
//U
export const updateProduct = (newMenu, name) => {
  callToDB(newMenu, name, "Error updating menu data:");
  return newMenu;
};
//D
export  const deleteProduct = (newMenu, name) => {
  callToDB(newMenu, name, "Error deleting menu data:");
  return newMenu;
};
