import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Ghost from './assets/Ghost.tsx';
import './App.css'

function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

const Links = () => {
	const [copiedDiscord, setCopiedDiscord] = useState(false);
	const [hoveredLink, setHoveredLink] = useState(false);
	return (
		<>
			<div className="text-container margin-10"
				onMouseEnter={() => {
					setHoveredLink(true)
				}}
				onMouseLeave={() => {
					setHoveredLink(false)
				}}
			>
				<h3>{hoveredLink ? 'links ↓' : 'links'}</h3>
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
				<h4>project links</h4>
				<details>
					<summary>
						<a href="https://extoplasm.github.io/gta-internet"  target="_blank" rel="noopener noreferrer" className="link">gta internet remake</a>
					</summary>
					<p className="small">wip -<br/> a remake of the web present in gta 5, and no it will not be finished before gta 6</p>
				</details>
				<br/>
				<details>
					<summary>
						<a href="http://extoplasm.github.io/pomodoro"  target="_blank" rel="noopener noreferrer" className="link">pomodoro timer</a>
					</summary>
					<p className="small">wip -<br/> a small pomodoro timer, and no it will also not be finished before gta 6</p>
				</details>
			</div>
		</>
	)
}

export default function App() {
	return (
		<>
            <main className="content">
                <div className="text-container">
                    <h1 className="margin-10">extoplasm ©</h1>
                    <h2 className="margin-10">i code (sometimes)</h2>
                </div>
                <Links/>
            </main>
            <Canvas className="canvas" fallback={<div>webgl not supported</div>}>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
                <ambientLight intensity={0.1} />
                <Ghost position={[0, 0, 0]} />
            </Canvas>
		</>
	)
}
