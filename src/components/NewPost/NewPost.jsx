import React, { useState } from 'react'
import './newPost.css'

import { MdPostAdd } from 'react-icons/md'
import { MdCancelPresentation } from "react-icons/md";

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../../redux/features/post/postSlice.js'

import { format } from 'date-fns'
import { v4 } from 'uuid'

const NewPost = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [image, setImage] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const submitHandler = () => {
		try {
			const newPost = {
				id: v4(),
				img: image,
				title: title,
				body: text,
				datetime: format(new Date(), 'MMM dd, yyyy pp'),
			}

			dispatch(addPost(newPost))
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
			
			<h2 className='postTitle'>New Post</h2>
			<form className='postForm' onSubmit={e => e.preventDefault()}>
				<label className=''>
					Прикрепить изорбажение:
					<input
						type='file'
						className='hidden'
						onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
					/>
				</label>
				<div>{<img src={image} alt={image.name} />}</div>

				<label className='/'>
					Заголовок поста:
					<input
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
						className=''
					/>
				</label>

				<label className=''>
					Текст поста:
					<textarea
						value={text}
						onChange={e => setText(e.target.value)}
						className=''
					/>
				</label>

				<div className=''>
					<MdPostAdd className='addPost' onClick={submitHandler} />

					<MdCancelPresentation
						className='cancelPost'
						onClick={clearFormHandler}
					/>
				</div>
			</form>
		</section>
	)
}

export default NewPost
