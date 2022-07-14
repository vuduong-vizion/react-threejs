import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, Preload, OrbitControls } from '@react-three/drei'
import { Popconfirm } from 'antd'
import 'antd/dist/antd.css'
import { useThree } from "@react-three/fiber";

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const cursor = {
    x: 0,
    y: 0
};

const mesh = {
    position: null
};

const deg2rad = degrees => degrees * (Math.PI / 180);

const Camera = ({ ...props }) => {
    const camera = useRef();

    // window.addEventListener("mousemove", (event) => {
    //     cursor.x = event.clientX / sizes.width - 0.5;
    //     cursor.y = event.clientY / sizes.height - 0.5;
    // });

    window.addEventListener("click", (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
        if (camera.current) {
            // console.log(camera.current.position);
        }
    });

    // useFrame(() => {
    //     if (camera.current) {
    //         console.log(camera.current.position);
    //     }
    // })

    // useFrame(() => {
    //     if (camera.current && mesh.position.current) {
    //         camera.current.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
    //         camera.current.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
    //         camera.current.position.y = cursor.y * 3;

    //         camera.current.lookAt(mesh.position.current.position);
    //     }
    // });

    // useFrame((state) => {
    //     console.log(state.mouse);
    // })

    return (
        <perspectiveCamera
            ref={camera}
            fov={75}
            aspect={sizes.width / sizes.height}
            near={0.1}
            far={100}
        >
            <Portals {...props} />
        </perspectiveCamera>
    );
};


function Dome({ name, position, texture, onClick, handleClick, cameraPostion }) {
    const ref = useRef()

    // console.log(cameraPostion);

    // useEffect(() => {
    //     console.log(cameraPostion);
    // }, [cameraPostion])

    return (
        <group>
            <mesh
                // position={cameraPostion}
                onClick={e => handleClick(e)}
            // onClick={(e) => console.log(ref.current.position)}
            >
                <sphereBufferGeometry ref={ref} args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <mesh position={position}>
                <sphereGeometry args={[1.25, 32, 32]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <Popconfirm title="Are you sure you want to leave?" onConfirm={onClick} okText="Yes" cancelText="No">
                        <a href="#">{name}</a>
                    </Popconfirm>
                </Html>
            </mesh>
        </group >
    )
}

function Portals({ store, ...anotherProps }) {
    const [which, set] = useState(0)
    const { link, ...props } = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <Dome onClick={() => set(link)} {...props} texture={maps[which]}  {...anotherProps} />
}

const Screen = ({ ...props }) => {

    // useThree(({ camera }) => {
    //     camera.rotation.set(deg2rad(30), 0, 0);
    // });

    return (
        <>
            <Canvas
            // camera={{ position: [0, 0, 10] }}
            >
                <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={0.5}
                />
                <Suspense fallback={null}>
                    <Preload all />
                    <Camera {...props} />
                </Suspense>
            </Canvas>
        </>
    )
};

export default Screen;