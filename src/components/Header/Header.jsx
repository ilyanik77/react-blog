import React from 'react'
import './header.css'

const Header = ({ title }) => {
	return (
		<header className='header'>
			<div className='content container'>
                <div className='logo'>LOGO</div>
				<h1 className='headerTitle'>{title}</h1>
			</div>
		</header>
	)
}

export default Header
