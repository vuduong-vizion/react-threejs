// @flow 
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader'
import { useLoader } from '@react-three/fiber';
import model from './../assets/scene.gltf'
import * as React from 'react';

export const Model = () => {
    const geom = useLoader(ThreeMFLoader, model)
    return <primitive object={geom} />;
};