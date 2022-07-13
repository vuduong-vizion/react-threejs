import ThreeScene from "./components/ThreeScene";


export default function App() {
  return (
    <div className='App' style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={['#161c24']} />
      </ThreeScene>
    </div>
  )
}
