import React from 'react'
import './nav.css'

import { Link } from 'react-router-dom'
import Search from '../Search/Search'

const Nav = () => {
	return (
		<nav className='nav'>
			<div className='navContent container'>
				<Search />
				<ul className='navList'>
					<li className='navListItem'>
						<Link to='/'>Home</Link>
					</li>
					<li className='navListItem'>
						<Link to='/post'>New post</Link>
					</li>
					<li className='navListItem'>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
