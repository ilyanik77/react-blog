import React from "react";
import { Route, Routes } from "react-router-dom";
//, { useState, useEffect }
//import { format } from "date-fns";
import Home from "./Home";
import Layout from "./Layout";
import About from "./About";
import Missing from "./Missing";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import EditPost from "./EditPost";


function App() {

	// const [posts, setPosts] = useState([]);

	// const [search, setSearch] = useState("");
	// const [searchResalt, setSearchResalt] = useState([])
	// const [postTitle, setPostTitle] = useState("")
	// const [postBody, setPostBody] = useState("")

	// const [editTitle, setEditTitle] = useState("")
	// const [editBody, setEditBody] = useState("")

	// const navigate = useNavigate()

	// useEffect(() => {

	// 	const fetchPosts = async () => {
	// 		try {
	// 			const response = await api.get("/posts")
	// 			setPosts(response.data)
	// 		} catch (error) {
	// 			// not in the 200 response range
	// 			if (error.response) {
	// 				console.log(error.response.data);
	// 				console.log(error.response.status);
	// 			} else {
	// 				// error 404 
	// 				console.log(`Error: ${error.message}`);
	// 			}

	// 		}
	// 	}
	// 	fetchPosts()
	// }, [])


	// const handleDelate = async (id) => {
	// 	try {
	// 		await api.delete(`/posts/${id}`)
	// 		const postList = posts.filter(post => post.id !== id)
	// 		setPosts(postList)
	// 		navigate("/")
	// 	} catch (error) {
	// 		console.log(`Error: ${error.message}`);
	// 	}
		
	// }

	// const handleEdit = async (id)=> {
	// 	const datetime = format(new Date(), 'MMM dd, yyyy pp')
	// 	const updatePost = {
	// 		id,
	// 		title: editTitle,
	// 		body: editBody,
	// 		datetime
	// 	}

	// 	try {
	// 		const response = await api.put(`/posts/${id}`, updatePost)
	// 		setPosts(posts.map(post => post.id === id ? {...response.data} : post))
	// 		setEditTitle("")
	// 		setEditBody("")
	// 		navigate("/")
	// 	} catch (error) {
	// 		console.log(`Error: ${error.message}`);
	// 	}
	// }

	// const handleSubmit =  async (e) => {
	// 	e.preventDefault()
	// 	const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
	// 	const datetime = format(new Date(), 'MMM dd, yyyy pp')
	// 	const newPost = {
	// 		id,
	// 		title: postTitle,
	// 		body: postBody,
	// 		datetime
	// 	}
	// 	try {
	// 		const response = await api.post('/posts', newPost)
	// 		// console.log(response);
	// 		const allPost = [...posts, response.data]
	// 		setPosts(allPost)
	// 		setPostTitle("")
	// 		setPostBody("")
	// 		navigate("/")
	// 	} catch (error) {
	// 		console.log(`Error: ${error.message}`);
	// 	}

	// }

	// useEffect(() => {
	// 	const filterPost = posts.filter(post =>
	// 		((post.body).toLowerCase()).includes(search.toLowerCase())
	// 		|| ((post.title).toLowerCase()).includes(search.toLowerCase())
	// 	)

	// 	setSearchResalt(filterPost.reverse())

	// }, [posts, search])


	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="post">
					<Route index element={<NewPost />} />
					<Route path=":id" element={<PostPage />} />
				</Route>
				<Route path="post/:id/edit" element={<EditPost />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<Missing />} />
			</Route>

		</Routes>
	);
}

export default App;
