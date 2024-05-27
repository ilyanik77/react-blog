import React from 'react'

const Search = ({ search, setSearch }) => {
	return (
		<>
			<form className='navSearch' onSubmit={e => e.preventDefault()}>
				<input
					type='text'
					id='search'
					placeholder='Search post'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</form>
		</>
	)
}

export default Search
