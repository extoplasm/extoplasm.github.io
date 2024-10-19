import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { useRef, useState } from 'react';
import Box from './assets/Box.tsx'; 
import './App.css';

export default function App() {
	return (
		<>
			<Canvas>
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<Box position={[0, 0, 0]} />
			</Canvas>
		</>
	)
}
