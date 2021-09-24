import React from 'react'
import Link from 'next/link'

const styleInput = {borderRadius: "10px", margin: "1%"};
const styleButton = {margin: "2%"};

export default function generateContainer() {
	const [value, setValue] = React.useState('You sould complete the input first');
	const changeValue = () => {
		const newValue = document.getElementById('inputText').value;
		setValue(newValue);
	};
	return (
		<form>
			<input
				type='text'
				className='text-center'
				onChange={changeValue}
				placeholder="Your sentence"
				id="inputText"
				style={styleInput}
				/>
			<a href={"/text/" + value} type="submit">
				<button className='btn magicButton' style={styleButton}> 	GENERATE 		</button>
			</a>
		</form>
	)
}	
