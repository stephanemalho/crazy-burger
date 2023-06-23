import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
//C
export const addProductToDB = (newMenu, name) => {
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  const docRef = doc(db, "users", name);
  setDoc(docRef, userInfo);
};
//R
export const getProductsMenu = async (name) => {
  try {
    const productsMenu = await getDoc(doc(db, "users", name));
    if (productsMenu.exists()) {
      console.log("Document data:", productsMenu.data());
      return productsMenu.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log("Error getting menu data:", error);
    return null;
  }
};
//U
export const updateProduct = (newMenu, name) => {
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  try {
    const docRef = doc(db, "users", name);
    setDoc(docRef, userInfo);
  }
  catch (error) {
    console.log("Error updating menu data:", error);
  }
}

//D
export const deleteProduct = (newMenu, name) => {
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  try {
    const docRef = doc(db, "users", name);
    setDoc(docRef, userInfo);
  }
  catch (error) {
    console.log("Error deleting menu data:", error);
  }
}

