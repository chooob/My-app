import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listOfNote, changeListOfNote] = useState([]);

  function addNote(note) {
    //console.log("test");
    changeListOfNote(function (prevValue) {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    changeListOfNote(
      listOfNote.filter(function (item, index) {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea function={addNote} />
      {listOfNote.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          function={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
