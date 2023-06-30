import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = (name ,menuUpdated) => {
  const docRef = doc(db, "users", name);
  const userInfo = {
    username: name,
    menu: menuUpdated
  };
    setDoc(docRef, userInfo);
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
