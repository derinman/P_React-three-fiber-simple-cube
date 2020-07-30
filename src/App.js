import React from 'react'
import Box from './components/Box'
import './styles.css'
import { Canvas } from 'react-three-fiber'

const App =()=>{
  return(
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}

export default App;