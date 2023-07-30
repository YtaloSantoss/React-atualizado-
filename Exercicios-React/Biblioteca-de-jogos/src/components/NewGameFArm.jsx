import { useState } from "react"
import PropsTypes from "prop-types"
import TextInput from "./Textlnput"

NewGameForm.propsTypes = {
  addGame: PropsTypes.func
}


export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")


  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")

  }

  return (
    <form onSubmit={handleSubmit} >
      <TextInput
        value={title}
        setValue={setTitle}
      />
      <TextInput
        value={cover}
        setValue={setCover}
      />
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  )
}