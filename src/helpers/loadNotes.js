import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const noteSnap = await getDocs(
    collection(FirebaseDB, `${uid}/journal/notes`)
  );
  const notes = [];
  noteSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });
  return notes;
};
