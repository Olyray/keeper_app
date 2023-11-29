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

  function addNote (event) {
    
    console.log(event.target);
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
        onSubmit={addNote}
        title={noteDetails.title}
        content={noteDetails.content}
      />
      <Note 
        key={1} 
        title={noteDetails.title} 
        content={noteDetails.content} 
        />
      <Footer />
    </div>
  );
}

export default App;
