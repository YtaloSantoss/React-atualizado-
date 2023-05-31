
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const caunter  = useCounter()

 return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={caunter.increment}>
          count is {caunter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
