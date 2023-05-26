import Title from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import StatusText  from "./components/StatusText";

function sum(a, b) {
  return a + b
}


export default function App() {

  return (
    <div>
      <Title/>
      <Subtitle/>
      <StatusText/>
    </div>
  )
}