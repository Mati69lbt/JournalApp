import React from "react";
import NoteAppBar from "./NoteAppBar";

const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesone title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What Happend Today?"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          {" "}
          <img
            src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42b55b3e/products/NI_AJ5292-739/NI_AJ5292-739-1.JPG"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
