import React,{ useState} from "react";
import {BiSearch} from 'react-icons/bi';


function SearchBar({searchForTerm}){

	return (
		<div className='search'>
			<BiSearch className='search-icon'/>
     		<input type='text' placeholder='search note...' onChange = {(e)=>searchForTerm(e.target.value)}
     		className='search-input'></input>
		</div>

		)
}

export default SearchBar;