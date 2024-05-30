import React from 'react'
import './postItem.css'
import { Link } from "react-router-dom"

const PostItem = ({post}) => {
  
  return (
		<article className='postItem'>
			<Link to={`post/${post.id}`}>
				<h2 className='postItemTitle'>{post.title}</h2>
				<p className='postItemDate'>{post.datetime}</p>
			</Link>
			<p className='postItemBody'>
				{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
			</p>
		</article>
	)
}

export default PostItem