import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Box from './assets/Box.tsx'; 
import './App.css';

function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

export default function App() {
	const [copiedDiscord, setCopiedDiscord] = useState(false)
	return (
		<>
			<div className="text-container left">
				<h1 className="margin-10">extoplasm (c)</h1>
				<h2 className="margin-10">i code (sometimes)</h2>
			</div>
			<div className="text-container right">
				<h1 className="margin-10">extoplasm ©</h1>
				<h2 className="margin-10">i code (sometimes)</h2>
			</div>

			<div className="text-container middle">
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
			<Canvas className="canvas">
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
				<Box position={[0, 0, 0]} />
			</Canvas>
		</>
	)
}
