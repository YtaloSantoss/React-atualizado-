import PropsType from 'prop-types'

Input.protoType = {
  passwordSize: PropsType.number.isRequired,
  setPasswordSize: PropsType.func
}


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