import ThreeScene from "./components/ThreeScene";



export default function App() {
  return (
    <div className='App' style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <div className="screen-container">
        <ThreeScene className="screen-item" />
        <ThreeScene className="screen-item" />
      </div>
    </div >
  )
}
