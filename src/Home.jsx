import React from 'react';

import { useSelector } from 'react-redux';
import Post from './Post';


const Home = () => {

    const { posts } = useSelector(state => state.post)


    if (!posts.length) {
			return (
				<div className='text-xl text-center text-white py-10'>
					Постов не существует.
				</div>
			)
		}

		return (
			<div className='max-w-[900px] mx-auto py-10'>
				<div className='flex justify-between gap-8'>
					<div className='flex flex-col gap-10 basis-4/5'>
						{posts?.map((post, id) => (
							<Post key={id} post={post} />
						))}
					</div>
					
				</div>
			</div>
		)

}

export default Home