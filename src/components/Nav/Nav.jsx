import React from 'react'
import './nav.css'

import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
	return (
		<nav className='nav'>
			<div className='navContent container'>
				<form className='navSearch' onSubmit={e => e.preventDefault()}>
					<input
						type='text'
						id='search'
						placeholder='Search post'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</form>
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
