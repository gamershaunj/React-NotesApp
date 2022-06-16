import React,{ useState} from "react";
import "./styles.css";

const Note = ({id, text, date, handleDeleteNote}) => {
  

  return (
    <div className="note">
       <span>{text}</span>
       <div className='note-footer'>
         <small>{date}</small>
         <button className="delete" onClick={()=>handleDeleteNote(id)}>Delete</button>
       </div>
    </div>
    
    )
   
} 

export default Note;
