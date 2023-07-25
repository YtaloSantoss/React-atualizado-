import posterImg from "../../assets/imageee.jpg"
import styles from "./styles.module.css"

export default function Card() {
  return (
    <div className={styles.container}>
      <img src={posterImg} alt="" />
      <div>
        <h2></h2>
        <p></p>
        <button></button>
      </div>
    </div>
  )
}