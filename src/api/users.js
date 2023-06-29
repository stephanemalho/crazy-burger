import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu1 } from "../fakeData/fakeMenu";

export const getUser = async (id) => {
  const docRefToRetrieve = doc(db, "users", id);
  const docSnap = await getDoc(docRefToRetrieve);
  if (docSnap.exists()) {
    const userReceived = docSnap.data();
    return userReceived;
  }
};

export const createUser = async (userId) => {
    localStorage.clear();
    const userInfo = {
      username: userId,
      menu: fakeMenu1,
    };
    setDoc(doc(db, "users", userId ), userInfo);
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
    if (!existingUser) {
      await createUser(userId);
    }
  };