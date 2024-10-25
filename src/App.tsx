import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Ghost from './assets/Ghost.tsx';
import './App.css';

function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function Bio() {
	return (
		<>
			<h1 className="margin-10">extoplasm ©</h1>
			<h2 className="margin-10">i code (sometimes)</h2>
		</>
	)
}

export default function App() {
	const [copiedDiscord, setCopiedDiscord] = useState(false)
	return (
		<>
			<main className="content">
				<div className="text-container">
					<Bio/>
				</div>
				<div className="text-container margin-10">
					<h3>links</h3>
					<a className="link" href="https://www.youtube.com/@extoplasm" target="_blank" rel="noopener noreferrer">youtube</a>
					<br/>
					<a className="link" href="http://github.com/extoplasm" target="_blank" rel="noopener noreferrer">github</a>
					<br/>
					<button className="link" onClick={() => {
						copyToClipboard('@extoplasm')
						setCopiedDiscord(true)
						setTimeout(() => {
							setCopiedDiscord(false)
						}, 1000)
					}}>{copiedDiscord ? 'copied to clipboard!': 'discord' }</button>
				</div>
			</main>
			<Canvas className="canvas">
				<ambientLight intensity={0.1} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
				<Ghost position={[0, 0, 0]} />
			</Canvas>
		</>
	)
}
