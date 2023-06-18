import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "./firebase";

// Get all todos based on uid user logged
export const getTodos = (uid) =>
  new Promise(async (resolve, reject) => {
    const colRef = collection(firestore, "todo");
    const uidRef = query(colRef, where("uid", "==", uid));
    getDocs(uidRef).then((res) => {
      const data = [];
      res.docs.forEach((doc) => {
        data.push(doc.data());
      });
      resolve(data);
    });
  });

export const getTodo = (todoId) =>
  new Promise(async (resolve, reject) => {
    const docRef = doc(firestore, "todo", todoId);
    const docSnap = await getDoc(docRef);

    resolve(docSnap.data());
  });

// Create new todo based on uid user logged
export const createTodo = (data) => {
  return new Promise(async (resolve, reject) => {
    const colRef = collection(firestore, "todo");
    const res = await addDoc(colRef, { ...data, status: false });
    const docRef = doc(firestore, "todo", res.id);

    await updateDoc(docRef, { id: res.id });
  });
};

// Update todo based on todoId
export const updateTodo = (todoId, data) =>
  new Promise(async (resolve, reject) => {
    const docRef = doc(firestore, "todo", todoId);

    await updateDoc(docRef, data);
    resolve("Todo updated");
  });

// Delete todo based on todoId
export const deleteTodo = (todoId) =>
  new Promise(async (resolve, reject) => {
    const docRef = doc(firestore, "todo", todoId);

    await deleteDoc(docRef);
    resolve("Todo deleted");
  });
