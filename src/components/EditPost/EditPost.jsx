import React, { useEffect, useState, useCallback } from 'react'
import './editPost.css'
import { format } from 'date-fns'

import axios from '../../api/axios'

import { GrUpdate } from 'react-icons/gr'
import { MdCancelPresentation } from 'react-icons/md'

import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updatePost } from '../../redux/features/post/postSlice.js'

const EditPost = () => {
	const [post, setPost] = useState('')
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { id } = useParams()

	const submitHandler = () => {
		try {
			const editPost = {
				id,
				title: title,
				body: text,
				datetime: format(new Date(), 'MMM dd, yyyy pp'),
			}

			console.log(editPost)

			dispatch(updatePost(editPost))
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	const fetchPost = useCallback(async () => {
		const { data } = await axios.get(`/posts/${id}`)
		setPost(data)
	}, [id])

	useEffect(() => {
		fetchPost()
	}, [fetchPost])

	const cancelFormHandler = () => {
		navigate('/')
	}

	return (
		<section className='editPostPage'>
			<div className='editPostContent container'>
				<h2 className='editPostTitle'>Edit Post</h2>
				<form className='editPostForm' onSubmit={e => e.preventDefault()}>
					

					<label className='formField'>
						Заголовок поста:
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							//placeholder='Заголовок'
						/>
					</label>

					<label className='formField'>
						Текст поста:
						<textarea
							onChange={e => setText(e.target.value)}
							value={post.body}
							//placeholder='Текст поста'
						/>
					</label>

					<div className='editPostBtnBox'>
						<GrUpdate onClick={submitHandler} className='editPost' />

						<MdCancelPresentation
							onClick={cancelFormHandler}
							className='cancelPost'
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default EditPost
