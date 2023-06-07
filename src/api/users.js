import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
//import { fakeMenu2 } from "../fakeData/fakeMenu";

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

export const createUser = async (name, menu) => {
  const user = await getUser(name);
  if (user) {
    // Utilisateur déjà existant
    return;
  } else {
    const userId = name; // Convertir le nom en minuscules
    localStorage.clear();
    const nourriture = {
      prenom: name,
      products: menu,
    };
    setDoc(doc(db, "users", userId), {
      nourriture,
    });
  }
};
