import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
    
	return (
		<div className='search col-sm-12' style={{width: "60vw", paddingRight:"10vw"}}>
			<MdSearch className='search-icons' size='1.3em'/>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;