import * as React from 'react';

type Props = {
	name: string
	url: string
	audio?: string
};

export function ImageWithSound(props: Props) {

	const play = () => {
		console.log('play')
		if (!props.audio)
			return;
		new Audio(props.audio).play();
	}

	return (
		<div
			className={"relative"}
			onClick={play}>
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
};
