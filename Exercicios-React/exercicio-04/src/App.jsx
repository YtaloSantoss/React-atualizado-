import { useState } from "react"
import Input from "./components/input"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]

    }
    setPassword(newPassword)
    setCopyText("Copiar!")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input
          passwordSize={passwordSize}
          setPasswordSize={setPasswordSize}
        />
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} characters!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
