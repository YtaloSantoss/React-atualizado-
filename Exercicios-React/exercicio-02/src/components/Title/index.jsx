function sun(a, b) {
  return a + b
}


export default function Title() {
  const tech = "Java Script..."

  return (
    <h1 style={{ color: "#ff0f0f" }}>{tech} + React ... {sun(1, 2)} yes</h1>
  )
}
