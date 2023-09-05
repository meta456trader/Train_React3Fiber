import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PointerLockControls, Stats} from '@react-three/drei'

import {Polyhedron} from "./Polyhedron";
import {Perf} from "r3f-perf";
import {Leva} from 'leva'
import {Lights} from "./Light";
import Floor from "./Floor";

export default function App() {
    return (
        <>
            <Canvas camera={{position:[0, 0, 2]}} frameloop="always" shadows>
                <Lights />

                <Polyhedron
                    name="meshBasicMaterial"
                    position={[-3, 1, 0]}
                    material={new THREE.MeshBasicMaterial()}
                />
                <Polyhedron
                    name="meshNormalMaterial"
                    position={[-1, 1, 0]}
                    material={new THREE.MeshNormalMaterial()}
                />
                <Polyhedron
                    name="meshPhongMaterial"
                    position={[1, 1, 0]}
                    material={new THREE.MeshPhongMaterial()}
                />
                <Polyhedron
                    name="meshStandardMaterial"
                    position={[3, 1, 0]}
                    material={new THREE.MeshStandardMaterial()}
                />
                <Floor/>

                <OrbitControls target-y={1} />
                <axesHelper args={[5]} />
                <gridHelper />

                <Perf position="top-left" deepAnalyze={true}/>
            </Canvas>
            <Leva collapsed />
        </>
    )
}