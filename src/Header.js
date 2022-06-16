import './styles.css';

const Header = ({handleToggleDarkMode}) => {



	return (
		<div className='header'>
			<h1>Notes</h1>
			<button className='toggle-btn' onClick={()=>handleToggleDarkMode((prevMode)=>!prevMode)}><b>Toggle mode</b></button>
		 </div>
		)
}

export default Header