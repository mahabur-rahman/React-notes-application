import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  //   save note after btn click
  const handleClickSave = (e) => {
    handleAddNote("hey");
  };

  return (
    <div className="mt-3 bg-light p-3">
      <textarea
        placeholder="type note.."
        className="form-control border-0 bg-light"
        rows="5"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="d-flex align-items-center justify-content-between">
        <span>200 remaining</span>
        <button className="btn btn-warning" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
