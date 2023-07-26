import Buttton from "../LinksButton"
import ProfileSection from "../ProfileSection"
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
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <Buttton href={props.githubUrl}>GitHub</Buttton>
          <Buttton href={props.linkdinUrl}>LinkdIn</Buttton>
          <Buttton href={props.twitterUrl}>Twitter</Buttton>
        </div>
      </ProfileSection>

    </div>
  )
}