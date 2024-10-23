import * as THREE from 'three';
import { useFrame, ThreeElements } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function Box(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!)

	const [hovered, setHover] = useState(false);
	
	// rotate
	useFrame((_state, delta) => {
		meshRef.current.rotation.x += delta/2
		meshRef.current.rotation.y -= delta/2
	});

	return (
		<mesh
			{...props}
			ref = {meshRef}
			onPointerOver = {(_e) => setHover(true)}
			onPointerOut = {(_e) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'grey' : 'white'}/>
		</mesh>
	)
}

