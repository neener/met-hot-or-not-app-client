import React from 'react'

const Navbar = ({ changeRoute }) =>
	<div>
		<button className="nav-button" onClick={() => changeRoute('playgame')}>Play Game</button>
		<button className="nav-button" onClick={() => changeRoute('hotcollection')}>Hot Collection</button>
	</div>