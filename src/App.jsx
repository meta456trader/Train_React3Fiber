import {Box} from "./Box";
import {Canvas} from "@react-three/fiber";
import { Stats } from '@react-three/drei'
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
            <Stats/>
            <Perf position="top-right" deepAnalyze={true}/>
        </Canvas>
    )
}