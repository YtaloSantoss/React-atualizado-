import { useState } from "react"



function App() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDault()
  }


  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form action="">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input
            type="text"
            name="cover"
            id="cover"
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
    </div>
  )

}

export default App
