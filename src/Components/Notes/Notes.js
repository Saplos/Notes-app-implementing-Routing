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

  const notes = state.notes;

  render();
  return (
    <div className="Notes">
      <h1> Notes </h1>
      {renderNotes(notes)}
    </div>
  );
};

export default Notes;
