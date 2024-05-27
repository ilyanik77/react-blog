import React, { useState } from 'react'
import './newPost.css'

import { MdPostAdd } from 'react-icons/md'
import { MdCancelPresentation } from 'react-icons/md'

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
			<div className='newPostContent container'>
				<h2 className='newPostTitle'>New Post</h2>
				<form className='newPostForm' onSubmit={e => e.preventDefault()}>
					<label className='formField'>
						Прикрепить изорбажение:
						<input
							type='file'
							onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
						/>
					</label>
					<div className='formFieldImg'>
						{<img src={image} alt={image.name} />}
					</div>

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
						<textarea
							value={text}
							onChange={e => setText(e.target.value)}
						/>
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
