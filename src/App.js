import Screen from "./components/Screen";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState, version } from "react";
import Child from "./components/Child";

const store = [
  { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/assets/kloofendal_38d_partly_cloudy.jpg', link: 1 },
  { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/assets/northcliff.jpg', link: 0 }
  // ...
]

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function App() {

  const [vector, setVector] = useState({})

  const handleClick = v => {
    // 👇️ take parameter passed from Child component
    setVector(v);
    console.log(vector);
  };
  // useEffect(() => {
  //   console.log(vector);
  // }, [vector]);


  return (
    <div className='App' style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <div className="screen-container">
        <Screen className="screen-item" store={store} handleClick={handleClick} cameraPostion={vector} />
        <Screen className="screen-item" store={store} handleClick={handleClick} cameraPostion={vector} />
        {/* <Child handleClick={handleClick} />
        <h2>Count: {count}</h2> */}
      </div>
    </div >
  )
}
