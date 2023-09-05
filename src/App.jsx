import {Box} from "./Box";
import {Canvas} from "@react-three/fiber";

export default function App() {
    return (
        <Canvas camera={{position:[0, 0, 2]}} frameloop="always">
            <Box position={[-0.65, 0, 0]} name="A"/>
            <Box position={[+0.65, 0, 0]} name="B"/>
        </Canvas>
    )
}