import Title from "../Title"
import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container} >
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        {props.name}
        <button>Follow</button>
      </Title>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank">GitHub</a>
        <a href={props.linkdinUrl} target="_blank">LinkdIn</a>
        <a href={props.twitterUrl} target="_blank">Twitter</a>
      </div>
    </div>
  )
}