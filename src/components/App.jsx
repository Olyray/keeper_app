import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteDetails, setNoteDetails] = useState({
    title: "",
    content: ""
  })

  const [notesArray, setToArray] = useState([]);

  function addToArray (event) {
    event.preventDefault();
    setToArray((prevNotes) => {
      return [...prevNotes, noteDetails]
    })
    setNoteDetails({
      title: "",
      content: ""
    });
  }

  function deleteNote (id) {
    console.log("Deleting note");
    setToArray ((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  function addNote (event) {
    const { value, name } = event.target;

    setNoteDetails((prevValue) => {
      if (name === "title") {
        return({
          title: value,
          content: prevValue.content
        })
      } else {
        return ({
          title: prevValue.title,
          content: value
        })
      }
    }) 

  }

  return (
    <div>
      <Header />
      <CreateArea 
        onChange={addNote}
        title={noteDetails.title}
        content={noteDetails.content}
        clickToAdd={addToArray}
      />
      {
        notesArray.map((eachNote, index) => {
        return (
          <Note 
            key={index}
            id={index} 
            title={eachNote.title} 
            content={eachNote.content}
            delete={deleteNote} 
          />
        );

        })
      }

      <Footer />
    </div>
  );
}

export default App;
