import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PointerLockControls, Stats} from '@react-three/drei'

import {Polyhedron} from "./Polyhedron";
import {Perf} from "r3f-perf";
import {Leva} from 'leva'
import {Lights} from "./Light";
import Floor from "./Floor";
import {LabelSprite} from "./Sprite";
import {Box} from "./Box";
import {useMemo} from "react";

export default function App() {
    const positions = useMemo(() => {
        let positions = []
        for (let i = 0; i < 100; i++) {
            positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -4 : 4))
            positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -4 : 4))
            positions.push(Math.random() * 10 * (Math.round(Math.random()) ? -4 : 4))
        }
        return new Float32Array(positions)
    }, [])
    return (
        <>
            <Canvas camera={{position:[0, 0, 30  ]}} frameloop="always" shadows>
                <Lights />

                <LabelSprite
                    name="sprite"
                    text="Sprite"
                    position={new THREE.Vector3(0,0,0.5)}
                    scale={new THREE.Vector3(1, 1, 1)}
                    color={new THREE.Color( 'skyblue' )}
                />

                <Polyhedron
                    name="meshBasicMaterial"
                    position={[-3, 1, 0]}
                    material={new THREE.MeshBasicMaterial()}
                />
                <Polyhedron
                    name="meshNormalMaterial"
                    position={[-5, 1, 0]}
                    material={new THREE.MeshNormalMaterial()}
                />
                <Polyhedron
                    name="meshPhongMaterial"
                    position={[5, 1, 0]}
                    material={new THREE.MeshPhongMaterial()}
                />
                <Polyhedron
                    name="meshStandardMaterial"
                    position={[3, 1, 0]}
                    material={new THREE.MeshStandardMaterial()}
                />
                {/*<Floor/>*/}

                <OrbitControls target-y={1} />
                <axesHelper args={[5]} />
                <gridHelper />

                <Perf position="top-left" deepAnalyze={true}/>
            </Canvas>
            <Leva collapsed />
        </>
    )
}