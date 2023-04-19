import * as React from 'react';

type Props = {
	name: string
	url: string
	audio?: string | [string, string]
};

function playDouble(url: string, url2: string) {
	const first = new Audio(url);
	const second = new Audio(url2);
	first.addEventListener('ended', function () {
		second.play();
	})
	first.play();
}

export function ImageWithSound(props: Props) {

	const play = () => {
		console.log('play')
		if (!props.audio) {
			// Play  nothing
		} else if (typeof props.audio === 'string') {
			// Play one audio clips
			new Audio(props.audio).play();
		} else {
			// Play two audio clips
			playDouble(props.audio[0], props.audio[1])
		}
	}

	return (
		<div
			className={"relative"}
			onMouseDown={play}
			// onClick={play}
		>
			<img
				src={props.url}
				alt={props.name}
				className={"rounded-lg" + (props.audio ? " cursor-pointer" : "")}
			/>
			{props.audio &&
				<div
					className="absolute top-2 left-2 flex items-center justify-center w-8 h-8 bg-gray-200 bg-opacity-40	rounded-full p-1">
					<img src={"speaker.svg"} alt={"has audio"}/>
				</div>
			}
		</div>
	);
}
