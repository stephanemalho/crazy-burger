import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = async (newMenu, name) => {
  const userInfo = {
    username: name,
    menu: newMenu,
  };
  try {
    const docRef = doc(db, "users", name);
    await setDoc(docRef, userInfo);
  } catch (error) {
    console.error("syncBoth error:",error);
  }
};

export const getMenu = async (id) => {
  const docRefToRetrieve = doc(db, "users", id);
  const docSnapshot = await getDoc(docRefToRetrieve);
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    console.log("userReceived.menu", menu);
    return menu;
  }
};
