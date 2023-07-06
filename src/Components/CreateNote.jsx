import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateNote(props){
    const [note,setNote]=useState({title:"",content:""});
    const [isopen,open]=useState(false);
    const updateTitle=(evt)=>{
        //console.log(evt.target.value)
        setNote({...note,title:evt.target.value})
    }
    const updateContent=(evt)=>{
        //console.log(evt.target.value)
        setNote({...note,content:evt.target.value})
    }
    const fun=(evt)=>{
        evt.preventDefault();
        props.addNote(note);
        setNote({title:"",content:""});
        open(false)
    }
    const expand=()=>{
        open(true);
    }
    return(
        <>
           <form className="create-note">
            <input type="text" placeholder={isopen?"Title":"Create Note"} name="title" onClick={expand} onChange={updateTitle} value={note.title}></input>
            {isopen && <textarea placeholder="Content" name="content" onChange={updateContent} value={note.content} row='3' ></textarea>}
            <Zoom in={isopen}>
            <Fab onClick={fun}><AddIcon /></Fab>
            </Zoom>
           </form>
        </>
    )
}

export default CreateNote;