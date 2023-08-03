import UserContext from "./contexs/UseContext";




function App() {
  const user = {
    name: 'João',
    email: 'joao@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      <h1>Usando useContext</h1>
    </UserContext.Provider>
  )
}

export default App
