import React, { useState } from 'react'

const Search = () => {

    const [search, setSearch] = useState('')

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
