import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

function GlobalFilter({ filter, setFilter }) {
	const [ value, setValue ] = useState(filter);

	const onChangeImplement = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 400);

	return (
		<div>
			<label htmlFor="">Search: </label>
			<input
				type="text"
				placeholder="type here..."
				style={{ width: '300px' }}
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					onChangeImplement(e.target.value);
				}}
			/>
		</div>
	);
}

export default GlobalFilter;
