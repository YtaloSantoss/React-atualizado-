function sun(a, b) {
  return a + b
}

function App() {
  const tech = "Java Script"
  return (
    <div>
      <h1>{tech} + React ... {sun(1, 1)}</h1>
    </div>
  )
}



export default App
