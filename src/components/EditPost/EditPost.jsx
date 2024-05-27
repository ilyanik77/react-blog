import React, { useEffect, useState, useCallback } from 'react'
import './editPost.css'
import { format } from 'date-fns'

import { GrUpdate } from 'react-icons/gr'
import { MdCancelPresentation } from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { editPost } from '../../redux/features/post/postSlice.js'

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

			console.log(updatePost)

			dispatch(editPost(updatePost))
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	const post = posts.find(post => post.id.toString() === params.id)
	console.log(post)
	// setTitle(post.title)
	// setText(post.text)
	// setOldImage(post.img)

	// const postData = useCallback(async () => {
	// 	const post = posts.find(post => post.id.toString() === params.id)
	// 	setTitle(post.title)
	// 	setText(post.text)
	// 	setOldImage(post.img)
	// }, [params.id])

	useEffect(() => {
		if (post) {
			setTitle(post.title)
			setText(post.body)
			setImage(image)
		}
	}, [post, setText, setTitle, setImage])

	const clearFormHandler = () => {
		setText('')
		setTitle('')
	}

    const cancelFormHandler = () => {
        navigate("/")
    }

	return (
		<section className='editPostPage'>
			<div className='editPostContent container'>
				<h2 className='editPostTitle'>Edit Post</h2>
				<form className='editPostForm' onSubmit={e => e.preventDefault()}>
					<label className='formField'>
						Прикрепить изорбажение:
						<input
							type='file'
							onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
						/>
					</label>
					<div className='formFieldImg'>
						{/* {oldImage && (
						<img
							src={`http://localhost:3002/${oldImage}`}
							alt={oldImage.name}
						/>
					)} */}
						{post.img}
						{<img src={image} alt={image.name} />}
					</div>

					<label className='formField'>
						Заголовок поста:
						<input
							type='text'
							value={post.title}
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
