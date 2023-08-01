import { useEffect, useState } from "react"


function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    alert("O efeito coloteral foi ativado")
  }, [])
  return (
    <div>
      <h1>Conhecendo useEffect</h1>
      <button onClick={() => setCounter(count => count + 1)}>
        Contador:{counter}
      </button>
    </div>
  )
}

export default App
