import axios from 'axios'

export default axios.create({
	// add url ans satrt server
	baseURL: 'http://localhost:3500',
})
