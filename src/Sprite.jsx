import * as THREE from 'three'
import React, {useMemo, useRef} from "react";
import { Line } from '@react-three/drei';
import {useControls} from "leva";


export function LabelSprite({name="sprite",  text = '', scale=new THREE.Vector3(1,1,1), color=new THREE.Color(1,1,1), fontSize = 30 , position}) {
    const spriteRef = useRef(null);

    const canvas = useMemo(() => {
        const fontFace = 'Arial'

        const canvas = document.createElement('canvas')
        canvas.width = 150
        canvas.height = 150

        const context = canvas.getContext('2d')
        if (context == null) return;

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = `bold ${fontSize}px ${fontFace}, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
        context.fillStyle = "#" + color.getHexString();
        context.fillText(text, canvas.width / 2, canvas.height / 2)

        return canvas;

    }, [text, color])


    useControls(name, {
        position: {
            x: 0,
            y: 0,
            z: 0.5,
            onChange: (v) => {
                spriteRef.current.position.copy(v)
                console.log(spriteRef.current.geometry);
            },
        },
    })

    return (
        // <sprite scale={scale} position={position} ref={spriteRef}>
        //     <spriteMaterial sizeAttenuation={false} attach="material" transparent depthTest={true}>
        //         <canvasTexture attach="map" image={canvas} />
        //     </spriteMaterial>
        // </sprite>

        <points ref={spriteRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={1}
                    array={new Float32Array(position.x, position.y, position.z)}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" sizeAttenuation={false} transparent depthTest={false} size={100}>
                <canvasTexture attach="map" image={canvas} />
            </pointsMaterial>
        </points>
    )
}
