import React from "react";

const AddNote = () => {
  return (
    <div className="mt-3 bg-light p-3">
      <textarea
        placeholder="type note.."
        className="form-control border-0 bg-light"
        rows="5"
      ></textarea>
      <div className="d-flex align-items-center justify-content-between">
        <span>200 remaining</span>
        <button className="btn btn-warning">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
