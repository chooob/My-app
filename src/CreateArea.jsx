import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
//import Note from "./Note";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  const [note, changeNotes] = useState({
    title: "",
    content: "",
  });

  function test(event) {
    event.preventDefault();
  }

  function createNote(event) {
    // const {name, value} = event.target;

    const name = event.target.name;
    const value = event.target.value;

    changeNotes(function (prevValue) {
      //shorter version of if/else statements
      // return {
      //   ...prevValue,
      //   [name]:value
      // }

      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  function expanded() {
    setExpand(true);
  }

  return (
    <div>
      <form onSubmit={test} className="create-note">
        {expand ? (
          <input
            onChange={createNote}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        ) : null}

        <textarea
          onClick={expanded}
          onChange={createNote}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
        />
        <Zoom in={expand ? true : false}>
          <Fab
            onClick={() => {
              props.function(note);
              changeNotes({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
