import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

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
      <AddNote />
    </div>
  );
};

export default NoteList;
