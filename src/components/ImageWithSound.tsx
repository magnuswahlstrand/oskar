import * as React from 'react';

type Props = {
	name: string
	url: string
	audio?: string | [string, string]
};


function playAudio(url: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const audio = new Audio(url);
		audio.addEventListener('ended', function () {
			console.log('ended')
			resolve()
		})
		audio.addEventListener('error', function () {
			console.log('ended')
			reject()
		})
		audio.play();
	})
}

function SpeakerIcon(props: { playing: boolean }) {
	return <div
		className={`absolute top-2 left-2 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full p-1 ${props.playing ? "bg-opacity-100" : "bg-opacity-40"}`}>
		<img src={"speaker.svg"} alt={"has audio"}/>
	</div>;
}

export function ImageWithSound(props: Props) {
	const [playing, setPlaying] = React.useState(false);
	const play = () => {
		if (playing || !props.audio) return

		setPlaying(true)
		if (typeof props.audio === 'string') {
			// Play one audio clips
			playAudio(props.audio)
				.finally(() => setPlaying(false))
		} else {
			// Play two audio clips
			playAudio(props.audio[0])
				.then(() => playAudio(props.audio[1]))
				.finally(() => setPlaying(false))
		}
	}

	const imgClasses = "rounded-lg" + props.audio ? " cursor-pointer" : ""

	return (
		<div
			className={"relative"}
			onMouseDown={play ? play : undefined}
		>
			<img
				src={props.url}
				alt={props.name}
				className={imgClasses}
			/>
			{props.audio &&
				<SpeakerIcon playing={playing}/>
			}
		</div>
	);
}
