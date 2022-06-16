import React,{ useState, useEffect} from "react";
import NoteList from "./NoteList";
import "./styles.css";
import {nanoid} from "nanoid";
import SearchBar from "./SearchBar";
import Header from "./Header";


function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the first note!",
      date: "15/02/2005"
    },
    {
      id: nanoid(),
      text: "This is the second note!",
      date: "18/06/2012"
    },
  
       {
      id: nanoid(),
      text: "This is the fifth note!",
      date: "30/05/2020"
    }

    ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app'));

    if (savedNotes){
      setNotes(savedNotes);
    }


  }, [])

  useEffect(()=>{
    localStorage.setItem('react-notes-app', JSON.stringify(notes));

  }, [notes])

  function addNoteinApp(text){
     const date = new Date();
     const newNote = {
      text: text,
      date:date.toLocaleDateString(),
      id: nanoid()
     }
     const newNotes = [...notes, newNote];
     setNotes(newNotes);
   }

   const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id!==id)
    setNotes(newNotes);

   }

  return (
    <div className={darkMode?'dark-mode':''}>
        <div className="app-container">
        <Header handleToggleDarkMode = {setDarkMode}/>
        <SearchBar searchForTerm={setSearchText}/>
        <NoteList notes={notes.filter((note)=>note.text.match(searchText))} 
         handleAddNote = {addNoteinApp} handleDeleteNote = {deleteNote}/>
        </div>

    </div>
    
    
    )
   
} 

export default App;
