import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import App from "./App";
import App1 from "./App1";
import App2 from "./App2";

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <App />
    </StrictMode>
)