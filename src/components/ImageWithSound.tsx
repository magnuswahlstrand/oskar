// @flow
import * as React from 'react';

type Props = {
	name: string
	url: string
	audio?: string
};

export function ImageWithSound(props: Props) {

	const play = () => {
		console.log('play')
		if(!props.audio)
			return;
		new Audio(props.audio).play();
	}

	// const play = () => {
	// 	console.log('play')
	// 	alert('hi')
	// }

	return (
		<div
			onClick={play}>
			<img
				src={props.url}
				alt={props.name}
				className="rounded-lg"
			/>
		</div>
	);
};
