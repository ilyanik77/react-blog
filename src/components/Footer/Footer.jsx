import React from 'react'
import './footer.css'

const Footer = ({ title }) => {
	// console.log(length);
	const year = new Date()
	return (
		<footer className='footer'>
			<div className='footerContent container'>
				<div className='logo'>LOGO</div>
				<div className='footerDesription'>
					<h1 className='footerTitle'>{title}</h1>
					<p className='year'>{year.getFullYear()}</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
