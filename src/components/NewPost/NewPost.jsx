import React, { useState } from 'react'
import './newPost.css'

import { MdPostAdd } from 'react-icons/md'
import { MdCancelPresentation } from 'react-icons/md'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../redux/features/post/postSlice.js'

import { format } from 'date-fns'
import { v4 } from 'uuid'

const NewPost = (e) => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const submitHandler = () => {
		try {
			const newPost = {
				id: v4(),
				title: title,
				body: text,
				datetime: format(new Date(), 'MMM dd, yyyy pp'),
			}

			dispatch(createPost(newPost))
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	const clearFormHandler = () => {
		setText('')
		setTitle('')
	}

	return (
		<section className='newPost'>
			<div className='newPostContent container'>
				<h2 className='newPostTitle'>New Post</h2>
				<form className='newPostForm' onSubmit={e => e.preventDefault()}>
					

					<label className='formField'>
						Заголовок поста:
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</label>

					<label className='formField'>
						Текст поста:
						<textarea value={text} onChange={e => setText(e.target.value)} />
					</label>

					<div className='newPostBtnBox'>
						<MdPostAdd className='addPost' onClick={submitHandler} />

						<MdCancelPresentation
							className='cancelPost'
							onClick={clearFormHandler}
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default NewPost
