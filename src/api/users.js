import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const getUser = async (id) => {
  const docRefToRetrieve = doc(db, "users", id);
  const docSnap = await getDoc(docRefToRetrieve);
  if (docSnap.exists()) {
    const userReceived = docSnap.data();
    return userReceived;
  }
  return null;
};

export const createUser = (userId) => {
    localStorage.clear();
    const userInfo = {
      username: userId,
      menu: fakeMenu2,
    };
    setDoc(doc(db, "users", userId ), userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
    console.log("user created");
    console.log(userInfo);
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
    if (!existingUser) {
      createUser(userId);
    }
  };