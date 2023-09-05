import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'

export const Box = (props) => {
    const ref = useRef();

    const [hovered, setHover] = useState(false)
    const [rotate, setRotate] = useState(false)

    useEffect(()=>{
        console.log("ref: ", ref);
        if (ref.current.name === 'B') {
            ref.current.position.y = 1
        }
    })

    useLayoutEffect(()=>{
        if (ref.current.name === 'A') {
            ref.current.position.y = 1
        }
    })

    useFrame((_, delta)=>{
        if (rotate) {
            ref.current.rotation.x += 1 * delta;
            ref.current.rotation.y -= 0.5 * delta;
        }
    })

    useEffect(() => {
        console.log(ref.current.geometry.uuid)
    })

    const geometry = new THREE.BoxGeometry()

    return (
        <mesh
            {...props}
            ref={ref}
            scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
            onPointerDown={(e) => setRotate(!rotate)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
            geometry={geometry}
        >
            <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
        </mesh>
    )
}