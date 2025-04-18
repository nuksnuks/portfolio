import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model({ url, ...props }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} {...props} />
}