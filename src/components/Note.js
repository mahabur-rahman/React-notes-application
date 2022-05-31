import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({ id, text, date }) => {
  return (
    <div className="col-lg-4 p-5 my-3 text-center bg-warning">
      <h3 className="mb-5">{text}</h3>
      <div>
        <span className="mx-5 px-5">{date}</span>
        <FaTrash className="mx-5 text-danger" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Note;
