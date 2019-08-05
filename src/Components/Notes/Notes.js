import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

const Notes = props => {
  const [state, setState] = useState({
    notes: [
      {
        id: 1,
        title: "My Note 1"
      },
      {
        id: 2,
        title: "My Note 2"
      },
      {
        id: 3,
        title: "My Note 3"
      }
    ]
  });

  const renderNotes = notes => (
    <ul>
      {notes.map((note, key) => (
        <li key={key}>
          <Link to={`/notes/${note.id}`}> {note.title} </Link>
        </li>
      ))}
    </ul>
  );

  const {
    match: {
      params: { noteId }
    }
  } = props;
  const notes = state.notes;
  let selectedNote = false;

  if (noteId > 0) {
    selectedNote = notes.filter(note => note.id === Number(noteId));
  }

  return (
    <div>
      <div className="NotesHeader">
        <Link to={"/notes"}> Notes </Link>
      </div>
      <div className="Notes">{renderNotes(selectedNote || notes)}</div>
    </div>
  );
};

export default Notes;
