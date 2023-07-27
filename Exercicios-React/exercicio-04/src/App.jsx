import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
  }
  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar!</button>
      <button>Copiar</button>
      <div>{password}</div>
    </div>
  )
}

export default App
