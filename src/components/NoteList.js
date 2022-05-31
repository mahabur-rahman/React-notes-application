import React from "react";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <div className="container">
      <div className="row">
        {notes?.map((note) => {
          return (
            <div key={note.id}>
              <Note id={note.id} text={note.text} date={note.date} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
