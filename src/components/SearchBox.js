import React from 'react';

const SearchBox = (props) => {
	return (
		<>
			Search Films... 
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder=''
			>
			</input>
		</>
	);
};

export default SearchBox;