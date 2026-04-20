import {useRef, useEffect} from 'react'
import { useFrame } from  '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
const Bird = () => {
    const birdRef = useRef();
    const{scene, animations } = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef);
    useEffect(() => {
        actions['Take 001'].play();
    },  []);

    useFrame(({clock , camera}) => {
      //update the Y position simulate the flight moving in a sin wave 
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
      
      //check if the bird reached a certain endpoint  relative to the camera
      if(birdRef.current.position.x > camera.position.x +10){
        // change  the direction to the backward and rotate the bird 180 degree on the Y axis 
        birdRef.current.rotation.y = Math.PI; //face left
      } else if(birdRef.current.position.x <camera.position.x - 10){
        //change the direction to forward and reset the bird's roation
        birdRef.current.rotation.y =0; //face right
      }

      //update the X and Z position based on the direction
      if(birdRef.current.rotation.y === 0){
        //Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else{
        //Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    });
  return (
    <mesh 
      position={[-5 , 2, 1]} 
      scale={[0.003 , 0.003, 0.003]}
      ref ={birdRef} 
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
