import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../api/axios.js'

const initialState = {
	posts: [],
}

// Получаение всех постов
export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
	try {
		const { data } = await axios.get('/posts')
		return data
	} catch (error) {
		console.log(error)
	}
})

// Создание поста
export const createPost = createAsyncThunk('post/createPost', async params => {
	try {
		const { data } = await axios.post('/posts', params)
		return data
	} catch (error) {
		console.log(error)
	}
})

// Удаление поста
export const removePost = createAsyncThunk('post/removePost', async id => {
	try {
		const { data } = await axios.delete(`/posts/${id}`, id)
		return data
	} catch (error) {
		console.log(error)
	}
})

// Обновление поста
export const updatePost = createAsyncThunk(
	'post/updatePost',
	async updatedPost => {
		try {
			const { data } = await axios.put(`/posts/${editPost.id}`, editPost)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)




export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// Получаение всех постов
			.addCase(getAllPosts.fulfilled, (state, action) => {
				
				state.posts = action.payload.posts
				state.popularPosts = action.payload.popularPosts
			})
			// Создание поста
			.addCase(createPost.fulfilled, (state, action) => {
				
				state.posts.unshift(action.payload)
			})
			// Удаление поста
			.addCase(removePost.fulfilled, (state, action) => {
				
				state.posts = state.posts.filter(
					post => post._id !== action.payload._id
				)
			})
			// Обновление поста
			.addCase(updatePost.fulfilled, (state, action) => {
				
				const index = state.posts.findIndex(
					post => post._id === action.payload._id
				)
				state.posts[index] = action.payload
			})
	},
})

export const { addPost, editPost } = postSlice.actions
export default postSlice.reducer
