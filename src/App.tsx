import { ThemeProvider } from "@emotion/react"
import { createBrowserRouter, RouterProvider } from "react-router"
import { theme } from "./lib/mui/theme"
import { HomePage } from "./pages/Home"

const router = createBrowserRouter([
  { path: '/', Component: HomePage }
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
