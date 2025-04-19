import { useRef, useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'

export function Model({ url, ...props }) {
    const { scene } = useGLTF(url)
    // Clone the scene so each instance is unique
    const clonedScene = useMemo(() => clone(scene), [scene])
    return <primitive object={clonedScene} {...props} />
}