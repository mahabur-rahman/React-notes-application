import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// nanoid
import { nanoid } from "nanoid";
// comp
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "First note", date: "2/3/2022" },
    { id: nanoid(), text: "Second note", date: "22/4/2022" },
    { id: nanoid(), text: "Third note", date: "12/5/2022" },
  ]);

  return (
    <div className="py-5">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
