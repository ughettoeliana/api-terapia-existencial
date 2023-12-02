// //import { db } from "./firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createUserProfile } from "./user.js";
// import { auth, db } from "../main.js";

// async function createAccount(account) {
//   const email = account.email;
//   const password = account.password;
//   try {
//     const userCredentials = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     const rol = "user";
//     createUserProfile(userCredentials.user.uid, { email, rol });

//     return {
//       id: userCredentials.user.uid,
//       email: userCredentials.user.email,
//       rol: rol,
//     };
//   } catch (error) {
//     return {
//       code: error.code,
//       message: error.message,
//     };
//   }
// }

// export async function createUserProfile(id, data) {
//   const refUser = doc(db, `users/${id}`);
//   return setDoc(refUser, { ...data, created_at: serverTimestamp() });
// }

// export default { createAccount };
