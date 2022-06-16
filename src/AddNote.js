import React, {useState} from "react";
import './styles.css';

const AddNote = ({handleAddNote}) => {

	const [noteText, setText] = useState('');
	const [textEmpty, isEmpty] = useState(false);
	const [remainingCount, setCount]=  useState(0);

	function handleInputChange(input){
		setText(input);
		setCount(200-input.length);
		//console.log(remainingCount);
		
	}

	function saveNote(){
		if (noteText===''){
			isEmpty(true);
		}
		else{
			handleAddNote(noteText);
			setText('');
			isEmpty(false);
			setCount(200);
		}
	}

	return (
		<div className="note new">
			<textarea placeholder="Enter your note..." value={noteText} 
			rows='8' cols='10' 
			onChange={(e)=>handleInputChange(e.target.value)}></textarea>
			{textEmpty?<b><span className='warning-msg'>Please enter some text!</span></b>:null}
			<div className='note-footer'>
				<small>{remainingCount} remaining</small>
				<button className='save' onClick = {()=>saveNote()}>Save</button>
			</div>
		</div>
		)

}

export default AddNote;