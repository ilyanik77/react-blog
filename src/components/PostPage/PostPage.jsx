import React from 'react'
import './postPage.css'

import { SlLike } from 'react-icons/sl'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdFolderDelete } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { removePost } from '../../redux/features/post/postSlice.js'

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
		<section className='postPage'>
			<div className='postPageContent container'>
				<article className='post'>
					{post && (
						<>
							<MdOutlineArrowBackIos
								className='back'
								onClick={() => navigate('/')}
							/>
							<div className='postDescr'>
								<img style={{ width: '100%' }} src={post.img} alt='' />
								<h2 className='postTitle'>{post.title}</h2>
								<p className='postDate'>{post.datetime}</p>
								<p className='postBody'>{post.body}</p>
							</div>

							<div className='postFooter'>
								<div className='likesBox'>
									<SlLike className='like' />
									<p>0</p>
								</div>
								<div className='buttonBox'>
									<Link to={`/post/${post.id}/edit`}>
										<CiEdit className='editBtn' />
									</Link>
									<MdFolderDelete
										className='deleteBtn'
										onClick={() => dispatch(removePostHandler)}
									/>
								</div>
							</div>
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
			</div>
		</section>
	)
}

export default PostPage
