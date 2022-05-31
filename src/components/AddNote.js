import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  //   console.log(text.length);
  //   characters limit
  const characterLimit = 10;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  //   save note after btn click
  const handleClickSave = (e) => {
    // console.log(text.trim().length);

    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    } else {
      alert("Please adding something!");
    }
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
        <span>{characterLimit - text.length} remaining</span>
        <button className="btn btn-warning" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
