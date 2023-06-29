import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = async (newMenu, name ) => {
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  try {
    const docRef = doc(db, "users", name);
    await setDoc(docRef, userInfo);
  } catch (error) {
    console.error( error);
  }
}

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
