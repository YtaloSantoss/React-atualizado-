import { useRef, useState } from "react";
import RefExample from "./RefExample";

function App() {
  const variable = 0
  const ref = useRef(0);
  const [state, setState] = useState(0);

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  return (
    <div>
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExample />
      <hr />
      <h2>Conhecendo o useRef</h2>
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar Variável</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <button onClick={showValues}>Exibir valores</button>
      <hr />

    </div>
  )
}

export default App