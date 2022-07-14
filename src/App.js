import Screen from "./components/Screen";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef, version } from "react";
import Child from "./components/Child";
import * as THREE from 'three';

const store = [
  { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/assets/kloofendal_38d_partly_cloudy.jpg', link: 1 },
  { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/assets/northcliff.jpg', link: 0 }
  // ...
]

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function App() {

  const [camera1, setCamera1] = useState(useRef())
  const [camera2, setCamera2] = useState(useRef())

  const handleMoveCamera1 = e => {
    // 👇️ take parameter passed from Child component
    // setVector(v);
    // if (camera1 == null) {
    //   setCamera1(e.camera);
    // }
    let vector = new THREE.Vector3();
    e.camera.getWorldDirection(vector);
    camera2.current.lookAt(new THREE.Vector3(vector.x, vector.y, vector.z));
  };

  const handleMoveCamera2 = e => {
    // if (camera2 == null) {
    //   setCamera2(e.camera);
    // }
    let vector = new THREE.Vector3();
    e.camera.getWorldDirection(vector);
    camera1.current.lookAt(new THREE.Vector3(vector.x, vector.y, vector.z));
  };

  // useEffect(() => {
  //   console.log(vector);
  // }, [vector]);


  return (
    <div className='App' style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <div className="screen-container">
        <Screen className="screen-item" store={store} handleMove={handleMoveCamera1} cameraRef={camera1}/>
        <Screen className="screen-item" store={store} handleMove={handleMoveCamera2} cameraRef={camera2}/>
        {/* <Child handleClick={handleClick} />
        <h2>Count: {count}</h2> */}
      </div>
    </div >
  )
}
