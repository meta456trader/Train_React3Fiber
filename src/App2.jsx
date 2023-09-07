import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import { BufferGeometry, BufferAttribute } from "three";
import {Canvas} from "@react-three/fiber";

function ThisSceneWorks(props) {
    const { positions } = props;
    let geometry = new BufferGeometry();
    geometry.addAttribute("position", new BufferAttribute(positions, 3));

    return (
        <points>
            <primitive attach="geometry" object={geometry} />
            <pointsMaterial attach="material" color="blue" size={0.1} />
        </points>
    );
}

function ThisSceneDoesNotWork(props) {
    const { positions } = props;
    const ref = useRef();

    useEffect(() => {
        console.log(ref);
    }, []);

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    itemSize={3}
                    count={positions.length / 3}
                />
            </bufferGeometry>
            <pointsMaterial color="red" size={0.1} />
        </points>
    );
}

export default () => {
    const n = 10;
    const positions = new Float32Array(n * 3);

    for (let index = 0; index < positions.length; index++) {
        positions[index] = Math.random();
    }

    return (
        <Canvas>
            <ThisSceneDoesNotWork positions={positions} />
        </Canvas>
    );
}


