import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";

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

    return (
        <mesh
            {...props}
            ref={ref}
            scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
            onPointerDown={(e) => setRotate(!rotate)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
            onUpdate={(self) => console.log(self)}
        >
            <boxGeometry/>
            <meshBasicMaterial color={0x00ff00} wireframe/>
        </mesh>
    )
}