import Title from "./components/Title"
import Staus from "./components/staus"
import Appmudule from "./App.module.css"




function App() {

  return (
    <div
      className={Appmudule.app}
    >
      <Title />
      <Staus />

    </div>
  )
}



export default App
