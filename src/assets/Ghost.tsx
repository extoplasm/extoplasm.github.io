import * as THREE from 'three';
import { useFrame, ThreeElements } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { GLTF } from 'three/examples/jsm/Addons.js';

const GhostGeometry = () => {
	const { scene } = useGLTF('../../ghost.glb') as unknown as GLTF;

    return <primitive object={scene} />;
}

export default function Ghost(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!)

	const [hovered, setHover] = useState(false);
	const [scale, setScale] = useState(false);
    
    // offset rotation
    useEffect(() => {
        meshRef.current.rotation.y = Math.floor(Math.random() * Math.PI)
    }, [])

	// rotate
	useFrame((_state, delta) => {
		meshRef.current.rotation.y -= (hovered ? delta*4 : delta/2)
	});

	return (
		<mesh
			{...props}
			ref = {meshRef}
			onClick = {(_e) => setScale(!scale)}
			scale = {scale ? 1.25 : 1}
			onPointerOver = {(_e) => setHover(true)}
			onPointerOut = {(_e) => setHover(false)}
		>
			<GhostGeometry/>
		</mesh>
	)
}

