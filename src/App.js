import React, {useState } from 'react'
import Box from './components/Box'
import './styles.css'
import { Canvas } from 'react-three-fiber'

import Loading from './components/Loading';

const App =()=>{
  
  const [modelLoaded, setModelLoaded] = useState(false);
  
  return(
    <div>
    <Loading modelLoaded={modelLoaded}/>
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 1.8, 0]} setModelLoaded = {setModelLoaded}/>
    <Box position={[1.2, 1.8, 0]} setModelLoaded = {setModelLoaded}/>
    <Box position={[-1.2, -1.8, 0]} setModelLoaded = {setModelLoaded}/>
    <Box position={[1.2, -1.8, 0]} setModelLoaded = {setModelLoaded}/>
    </Canvas>
    </div>
  )
}

export default App;