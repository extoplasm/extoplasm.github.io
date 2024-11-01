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

function Content() {
	const [copiedDiscord, setCopiedDiscord] = useState(false);
	const [hoveredLink, setHoveredLink] = useState(false);
	return (
		<>
			<main className="content">
			<div className="text-container">
				<h1 className="margin-10">extoplasm ©</h1>
				<h2 className="margin-10">i code (sometimes)</h2>
			</div>
			<div className="text-container margin-10"
				onMouseEnter={() => {
					setHoveredLink(true)
				}}
				onMouseLeave={() => {
					setHoveredLink(false)
				}}
			>
				<h3>{hoveredLink ? 'links 👇' : 'links'}</h3>
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
		</>
	)
}

export default function App() {
	return (
		<>
			<Content/>
			<Canvas className="canvas" fallback={<div>webgl not supported</div>}>
				<ambientLight intensity={0.1} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
				<Ghost position={[0, 0, 0]} />
			</Canvas>
		</>
	)
}
