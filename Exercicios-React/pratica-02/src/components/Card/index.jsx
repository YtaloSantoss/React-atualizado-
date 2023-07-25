import Button from "../Button"
import styles from "./styles.module.css"


export default function Card(props) {
  return (
    <div className={styles.container}>
      <img style={{ width: "300px", height: "auto", }} className={styles.poster} src={props.posterImg} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>Um quadro pintado por Artista desconhecido</p>
        <Button />
      </div>
    </div>
  )
}