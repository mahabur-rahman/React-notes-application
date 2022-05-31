import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// nanoid
import { nanoid } from "nanoid";
// comp
import NoteList from "./components/NoteList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "First note", date: "2/3/2022" },
    { id: nanoid(), text: "Second note", date: "22/4/2022" },
    { id: nanoid(), text: "Third note", date: "12/5/2022" },
  ]);

  const [search, setSearch] = useState("");

  // create note || add note
  const addNote = (text) => {
    // console.log(text);
    const date = new Date();

    const createNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNote = [...notes, createNote];

    setNotes(newNote);
  };

  // delete note
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);

    setNotes(newNote);
  };

  return (
    <div className="py-5">
      <Search handleSearch={setSearch} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(search)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
