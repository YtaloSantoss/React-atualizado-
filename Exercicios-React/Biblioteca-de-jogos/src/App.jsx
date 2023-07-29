




function App() {

  return (
    <div id="app">
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" id="title" />
    </div>
    <div>
      <label htmlFor="cover">Capa: </label>
      <input type="text" name="cover" id="cover" />
    </div>
    <button type="submit">Adicionar à biblioteca</button>
  )
}

export default App
