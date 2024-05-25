import React, { useEffect, useState, useCallback } from 'react'
import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { editPost } from './redux/features/post/postSlice.js'

import { v4 } from 'uuid'

const EditPost = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [oldImage, setOldImage] = useState('')
	const [image, setImage] = useState('')

	const { posts } = useSelector(state => state.post)
	//const { id } = useParams()

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()
	// update post

	const submitHandler = () => {
		try {
			const updatePost = {
				id: v4(),
				img: image,
				title: title,
				body: text,
				datetime: format(new Date(), 'MMM dd, yyyy pp'),
			}

            console.log(updatePost);

			dispatch(editPost(updatePost))
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	const post = posts.find(post => post.id.toString() === params.id)
    console.log(post);
	// setTitle(post.title)
	// setText(post.text)
	// setOldImage(post.img)

	// const postData = useCallback(async () => {
	// 	const post = posts.find(post => post.id.toString() === params.id)
	// 	setTitle(post.title)
	// 	setText(post.text)
	// 	setOldImage(post.img)
	// }, [params.id])

	useEffect( () => {
	    if(post){
	        setTitle(post.title)
	        setText(post.body)
            setImage(image)
	    }

	}, [post, setText, setTitle, setImage])

	const clearFormHandler = () => {
		setText('')
		setTitle('')
	}

	return (
		<main className='newPost'>
			<form className='newPostForm' onSubmit={e => e.preventDefault()}>
				<label className=''>
					Прикрепить изорбажение:
					<input
						type='file'
						className='hidden'
						onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
					/>
				</label>
				<div className=''>
					{/* {oldImage && (
						<img
							src={`http://localhost:3002/${oldImage}`}
							alt={oldImage.name}
						/>
					)} */}
					{post.img}
					{<img src={image} style={{ width: '320px' }} alt={image.name} />}
				</div>

				<label className='text-xs text-white opacity-70'>
					Заголовок поста:
					<input
						type='text'
						value={post.title}
						onChange={e => setTitle(e.target.value)}
						//placeholder='Заголовок'
						className=''
					/>
				</label>

				<label className='text-xs text-white opacity-70'>
					Текст поста:
					<textarea
						onChange={e => setText(e.target.value)}
						value={post.body}
						//placeholder='Текст поста'
						className=''
					/>
				</label>

				<div className=''>
					<button onClick={submitHandler} className=''>
						Обновить
					</button>

					<button onClick={clearFormHandler} className=''>
						Отменить
					</button>
				</div>
			</form>
		</main>
	)
}

export default EditPost
