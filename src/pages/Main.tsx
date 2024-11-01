import { Canvas } from '@react-three/fiber';
import Ghost from '../assets/Ghost.tsx';

export default function Main() {
	return (
		<>
			<main className="content">
				<div className="text-container">
					<h1 className="margin-10">extoplasm ©</h1>
					<h2 className="margin-10">i code (sometimes)</h2>
				</div>
			</main>
            <Canvas className="canvas" fallback={<div>webgl not supported</div>}>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
                <ambientLight intensity={0.1} />
                <Ghost position={[0, 0, 0]} />
            </Canvas>
		</>
	)
}