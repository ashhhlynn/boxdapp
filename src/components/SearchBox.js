import React from 'react';

const SearchBox = (props) => {
	return (
		<div>
			<h4>Search Films... 
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder=''
			>
			</input></h4>
			</div>
	);
};

export default SearchBox;