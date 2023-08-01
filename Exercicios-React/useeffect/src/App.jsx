import { useEffect, useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("O efeito colateral foi ativado!")
    return () => {
      console.log("Fazendo a limpeza componente desmontado")
      console.log("Componente desmontado! Fazendo a limpeza...")
    }
  }, [])

  return (
    <button onClick={() => setCounter(count => count + 1)}>
      Contador: {counter}
    </button>
  )
}


function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>Conhecendo useEffect</h1>
      <div>
        <input
          type="checkbox"
          id="show"
          value={show}
          onChange={() => setShow(state => !state)}
        />
        <label htmlFor="show">Exibir</label>
      </div>
      {
        show ? <Counter /> : null
      }

      <hr />
    </div>
  )
}

export default App
