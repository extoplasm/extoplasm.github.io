import { Canvas } from '@react-three/fiber';
import Box from './assets/Box.tsx'; 
import './App.css';

export default function App() {
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
			</div>
			<Canvas>
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
				<Box position={[0, 0, 0]} />
			</Canvas>
		</>
	)
}
