import { useState } from "react"

function App() {
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")


  const handleSbmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createDat: new Date()
    }

    setComments((state) => [newComment, ...state])
    setAuthor("")
    setContent("")
  }


  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={handleSbmit}>
        <label htmlFor="author">Email</label>

        <input
          id="author"
          type="email"
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <label htmlFor="content">Comentários</label>

        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <button >Enviar Comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createDat.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            )))
          : (
            <p>Seja o primeiro a comentar</p>
          )}
      </section>
    </div>
  )

}

export default App
