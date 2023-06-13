import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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
  const productsMenu = await getDoc(doc(db, "users", name));
  if (productsMenu.exists()) {
    console.log("Document data:", productsMenu.data());
    return productsMenu.data().productsMenu;
  } else {
    console.log("No such document!");
    return null;
  }
};
//U
export const updateProduct = async (newMenu, name) => {
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  const docRef = doc(db, "users", name);
  await updateDoc(docRef, userInfo);
};
//D
export const deleteProduct = async (newMenu) => {
 //delete 
  const userInfo = {
    menu: newMenu,
  };
  const docRef = doc(db, "users", userInfo.productsMenu);
  await deleteDoc(docRef);
};

