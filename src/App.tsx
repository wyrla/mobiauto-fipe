import { ThemeProvider } from "@emotion/react"
import { createBrowserRouter, RouterProvider } from "react-router"
import { theme } from "./lib/mui/theme"
import { HomePage } from "./pages/Home"
import { CssBaseline } from "@mui/material"
import { QuoteResult } from "./pages/QuoteResult"

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/quote-result', Component: QuoteResult },
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
