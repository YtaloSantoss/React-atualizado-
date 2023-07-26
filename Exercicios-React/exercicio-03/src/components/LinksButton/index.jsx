import styles from "./styles.module.css"

function Buttton(props) {
  return (
    <a
      href={props.href} target="_blank"
      className={styles.ButttonWap}
    >
      {props.children}
    </a>

  )
}

export default Buttton