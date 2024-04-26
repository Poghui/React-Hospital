import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "./firebase";

const pacientsCollection = collection(db, "pacients");

//CREATE USER
export const createPacient = (obj) => {
    console.log(obj)
    addDoc(pacientsCollection, obj);
}

//READ USERS
export const getPacients = async () => {
    const result = await getDocs(query(pacientsCollection));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    }
    );
}

//DELETE USER