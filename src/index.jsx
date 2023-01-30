import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
  <StrictMode>
    <h1> Webpack React </h1>
  </StrictMode>
)
