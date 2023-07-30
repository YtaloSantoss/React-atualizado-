import ProptTypes from "prop-types"

TextInput.propType = {
  value: ProptTypes.string,
  setValue: ProptTypes.func

}



export default function TextInput(value, setValue) {

  return (
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
  )
}