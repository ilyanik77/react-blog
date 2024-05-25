import React, { useState } from 'react'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPost } from './redux/features/post/postSlice.js'

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
		<main className='newPost'>
			<h2>New Post</h2>
			<form className='newPostForm' onSubmit={e => e.preventDefault()}>
				<label className=''>
					Прикрепить изорбажение:
					<input
						type='file'
						className='hidden'
						onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
					/>
				</label>
				<div>
					{ <img src={image} alt={image.name} />}
				</div> 

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
						onChange={e => setText(e.target.value)}
						value={text}
						className=''
					/>
				</label>

				<div className=''>
					<button
						onClick={submitHandler}
						//className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'
					>
						Добавить
					</button>

					<button
						onClick={clearFormHandler}
						//className='flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4'
					>
						Отменить
					</button>
				</div>
			</form>
		</main>
	)
}

export default NewPost
