import React from "react";
import Note from "./Note";

function Notes(props)
{
    return(
        <>
        {props.notes.map((note,index)=>{
           return <Note key={index} k={index} title={note.title} content={note.content} deleteNote={props.deleteNote}>
            </Note>
        })}
        </>
    )
}

export default Notes;