import posterImg from "../../assets/imageee.jpg"
import styles from "./styles.module.css"


export default function Card() {
  return (
    <div className={styles.container}>
      <img style={{ width: "300px", height: "auto", }} className={styles.poster} src={posterImg} alt="" />
      <div>
        <h2>Quadro Pintado</h2>
        <p>Um quadro pintador por Artista desconhecido</p>
        <button>Compre agora</button>
      </div>
    </div>
  )
}