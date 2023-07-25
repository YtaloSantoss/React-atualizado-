import posterImg from "./assets/imageee.jpg"
import posterImg2 from "./assets/menino1.jpg"
import posterImg3 from "./assets/arara.jpg"
import Card from "./components/Card"



function App() {

  return (
    <div className="app">
      <Card title="Quadro Trem" posterImg={posterImg} />
      <Card title="Quadro Menino" posterImg={posterImg2} />
      <Card title="Quadro Arara" posterImg={posterImg3} />
    </div>
  )

}

export default App
