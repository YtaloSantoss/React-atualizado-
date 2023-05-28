import posterImg from "../../../assets/sfgoh.png"

export default function Card () {
  return (
    <div className={StyleSheet.container}>
      <img src={posterImg} alt="Star wars" />
      <div>
        <h2>Pôster do filme Star Wars</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio suscipit omnis id ipsum, sed error fugiat.</p>
        <button>Comprar agora</button>
      
      </div>
    </div>
  )
}