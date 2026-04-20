import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useGLTF, useAnimations } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef()

  // Load plane model + animations
  const { scene, animations } = useGLTF(planeScene)

  // Control animations
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if (actions && actions['Take 001']) {
      if (isRotating) {
        actions['Take 001'].play()
      } else {
        actions['Take 001'].stop()
      }
    }
  }, [isRotating, actions])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane