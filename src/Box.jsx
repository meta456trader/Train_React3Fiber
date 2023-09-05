import {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'

export const Box = (props) => {
    const ref = useRef();

    const [hovered, setHover] = useState(false)
    const [rotate, setRotate] = useState(true)

    useEffect(()=>{
        console.log("ref: ", ref);
        if (ref.current.name === 'B') {
            ref.current.position.y = 0
        }
    })

    useLayoutEffect(()=>{
        if (ref.current.name === 'A') {
            ref.current.position.y = 0
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

    // this is bad code
    const geometryBAD = new THREE.BoxGeometry()

    const [count, setCount] = useState(0)
    const geometryGOOD = useMemo(()=>[new THREE.BoxGeometry(), new THREE.SphereGeometry(0.78)], []);

    return (
        <mesh
            {...props}
            ref={ref}
            scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
            onPointerDown={() => setCount((count + 1) % 2)}
            geometry={geometryGOOD[count]}
        >
            <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
        </mesh>
    )
}