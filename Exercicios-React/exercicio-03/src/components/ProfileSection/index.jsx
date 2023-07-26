import styles from "./styles.module.css"

export default function ProfileSection(props) {
  return (
    <div
      {...props}
      className={`${styles.container} ${props.className}`}
    >
      {props.children}
    </div>
  )
}