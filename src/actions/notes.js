import { FirebaseDB } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore/lite";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { async } from "@firebase/util";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // getState: no sabemos de donde salio pero te da informacion de los estados..
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await addDoc(
      collection(FirebaseDB, uid, "journal/notes"),
      newNote
    );
    // este doc conecta a la base de datos de firestore
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
