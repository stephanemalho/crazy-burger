import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const getUser = async (name) => {
  const userId = name;
  const docRefToRetrieve = doc(db, "users", userId);
  const docSnap = await getDoc(docRefToRetrieve);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data(); // Retourne les données de l'utilisateur
  } else {
    console.log("No such document!");
    return null; // Retourne null si l'utilisateur n'existe pas
  }
};

export const createUser = async (name) => {
    localStorage.clear();
    const userInfo = {
      prenom: name,
      productsMenu: fakeMenu2,
    };
    setDoc(doc(db, "users", name ), userInfo);
};
