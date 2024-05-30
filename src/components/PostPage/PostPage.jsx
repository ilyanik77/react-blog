import React from 'react'
import './postPage.css'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { removePost } from '../../redux/features/post/postSlice.js'

import axios from '../../api/axios'

import { SlLike } from 'react-icons/sl'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdFolderDelete } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'

const PostPage = () => {
	const [post, setPost] = useState([])

    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const[datetime] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { id } = useParams()

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const {data} = await axios.get(`/posts/${id}`)
				setPost(data)
                setTitle(data.title)
                setBody(data.body)
            
            
			} catch (error) {
				if (error.response) {
					console.log(error.response.data)
					console.log(error.response.status)
				} else {
					console.log(`Error: ${error.message}`)
				}
			}
		}
		fetchPost()
	}, [id])

	if (!post) {
		return <div className=''>Загрузка...</div>
	}

	const removePostHandler = () => {
		try {
			dispatch(removePost(id))
			navigate("/")
		} catch (error) {
			console.log(error)
		}
	}

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
								
								<h2 className='postTitle'>{title}</h2>
								<p className='postDate'>{datetime}</p>
								<p className='postBody'>{body}</p>
							</div>

							<div className='postFooter'>
								<div className='likesBox'>
									<SlLike className='like' />
									<p>0</p>
								</div>
								<div className='buttonBox'>
									<Link to={`/post/${id}/edit`}>
										<CiEdit className='editBtn' />
									</Link>
									<MdFolderDelete
										className='deleteBtn'
										onClick={() => removePostHandler()}
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
