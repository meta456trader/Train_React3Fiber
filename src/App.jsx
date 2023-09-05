import {Box} from "./Box";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PointerLockControls, Stats} from '@react-three/drei'
import * as THREE from "three";
import {Polyhedron} from "./Polyhedron";
import {Perf} from "r3f-perf";

export default function App() {
    const polyhedron  = [
        new THREE.BoxGeometry(),
        new THREE.SphereGeometry(0.785398),
        new THREE.DodecahedronGeometry(0.785398)
    ]

    return (
        <Canvas camera={{position:[0, 0, 2]}} frameloop="always">
            <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
            <OrbitControls enableDamping={true}/>
            <axesHelper />
            <gridHelper />
            <gridHelper args={[20, 20, 0xff0000, 'teal']} />
            {/*<PointerLockControls />*/}
            <Stats/>
            <Perf position="top-right" deepAnalyze={true}/>
        </Canvas>
    )
}