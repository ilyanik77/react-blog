import React, { useState, useEffect } from 'react'
import './home.css'


import axios from '../../api/axios'

import PostItem from '../PostItem/PostItem'

const Home = () => {
	const [posts, setPosts] = useState([])


	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get('/posts')
				setPosts(response.data)
			} catch (error) {
				if (error.response) {
					console.log(error.response.data)
					console.log(error.response.status)
				} else {
					console.log(`Error: ${error.message}`)
				}
			}
		}
		fetchPosts()
	}, [ ])


	return (
		<section className='home'>
			<div className='homeContent container'>
				<div className='postsList'>
					{posts?.map((post, id) => (
						<PostItem key={id} post={post} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Home
