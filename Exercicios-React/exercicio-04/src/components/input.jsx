


export default function Input(props) {


  return (

    <input
      type="number"
      id="passwordSize"
      min={6}
      value={props.passwordSize}
      onChange={(ev) => props.setPasswordSize(ev.target.value)}
    />
  )
}