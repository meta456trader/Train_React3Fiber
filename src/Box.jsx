import {useEffect, useRef} from "react";

export const Box = (props) => {
    const ref = useRef();

    useEffect(()=>{
        console.log("ref: ", ref);
    })

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry/>
            <meshBasicMaterial color={0x00ff00} wireframe/>
        </mesh>
    )
}