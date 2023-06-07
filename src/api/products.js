// import { doc, updateDoc } from "firebase/firestore";
// import { db } from "./firebase-config";

// export const updateProduct = async ( product) => {
//   // le chemin du documents est mochi-bubble/users + id de l'utilisateur + nourriture + id du produit
//   const docRefToUpdate = doc(db, "users", product.prenom, "nourriture", product.products);
//   await updateDoc(docRefToUpdate, {
//     prenom : product.prenom,
//     products : product.products,
//   });

//   try {
//     const productId = product.id;
//     console.log("productId", productId);
//     const docRefToUpdate = doc(db, "products", productId);

//     await updateDoc(docRefToUpdate, product);
//     console.log("Le produit a été mis à jour avec succès dans Firestore !");
//   } catch (error) {
//     console.error("Une erreur s'est produite lors de la mise à jour du produit :", error);
//   }

// };


