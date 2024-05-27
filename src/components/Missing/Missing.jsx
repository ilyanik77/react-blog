import React from 'react'
import './missing.css'
import { Link } from 'react-router-dom'

const Missing = () => {
	return (
		<section className='missing'>
			<div className='missingContent container'>
				<h2 className='missingTitle'>Post not found</h2>
				<p className='missingText'>Well.. Thet's dissapoint...</p>
				{/* <Link to='/'>Visit on our page</Link> */}
				<Link className='onHome' to='/'>
					on Home
				</Link>
			</div>
		</section>
	)
}

export default Missing
