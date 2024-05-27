import React from 'react'
import './header.css'
import Logo from '../Logo/Logo'

const Header = ({ title }) => {
	return (
		<header className='header'>
			<div className='content container'>
                <Logo />
				<h1 className='headerTitle'>{title}</h1>
			</div>
		</header>
	)
}

export default Header
