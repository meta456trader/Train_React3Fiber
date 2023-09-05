import {useEffect, useLayoutEffect, useRef} from "react";

export const Box = (props) => {
    const ref = useRef();

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

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry/>
            <meshBasicMaterial color={0x00ff00} wireframe/>
        </mesh>
    )
}