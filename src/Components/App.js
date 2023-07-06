import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

//{title:"test1",content:"Note1",key:"-1"},{title:"test2",content:"note2",key:"-2"}
const defnotes=[]
function App() {
  const [notes,setNotes]=useState([...defnotes]);

  const addNote=(note)=>{
    setNotes(prev =>{
      return [...prev,note];
    });
  }

  const deleteNote=(k)=>{
    const arr=notes.filter((note,index) =>{
      return index!==k;
    })
    setNotes([...arr])
  }


  return(
    <>
    <Header />
    <CreateNote addNote={addNote}></CreateNote>
    <Notes notes={notes} deleteNote={deleteNote}/>
    <Footer />
    </>
  )
}

export default App;
