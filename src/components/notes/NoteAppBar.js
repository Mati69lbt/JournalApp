import React from "react";

const NoteAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>09/08/2022</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default NoteAppBar;
