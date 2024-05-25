import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { removePost } from './redux/features/post/postSlice.js'

const PostPage = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { posts } = useSelector(state => state.post)
	const { id } = useParams()

	const removePostHandler = id => {
		dispatch(removePost(post.id))
		navigate('/')
	}

	const post = posts.find(post => post.id.toString() === id)

	return (
		<main className='postPage'>
			<article className='post'>
				{post && (
					<>
						<img style={{ width: '320px' }} src={post.img} alt='' />
						<h2>{post.title}</h2>
						<p className='postData'>{post.datetime}</p>
						<p className='postBoy'>{post.body}</p>
						<Link to={`/post/${post.id}/edit`}>
							<button className='editBtn'>Edit Post</button>
						</Link>
						<button
							onClick={() => dispatch(removePostHandler)}
							className='deleteBtn'
						>
							Delete Post
						</button>
					</>
				)}{' '}
				{!post && (
					<>
						<h2>Post not found</h2>
						<p>Well.. Thet's dissapoint... </p>
						<p>
							<Link className='btn' to='/'>
								on Home
							</Link>
						</p>
					</>
				)}
			</article>
		</main>
	)
}

export default PostPage
