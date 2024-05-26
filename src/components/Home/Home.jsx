import React from 'react'
import './home.css'

import { useSelector } from 'react-redux'
import PostItem from '../PostItem/PostItem'

const Home = () => {
	const { posts } = useSelector(state => state.post)

	if (!posts.length) {
		return <div className=''>Постов не существует.</div>
	}

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
