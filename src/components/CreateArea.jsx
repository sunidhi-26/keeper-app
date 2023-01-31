import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleExpand(event) {
    setExpand(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (note.title === '' && note.content === '') {
      alert('Empty note!');
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleExpand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;