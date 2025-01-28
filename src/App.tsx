import { ThemeProvider } from "@emotion/react"
import { createBrowserRouter, RouterProvider } from "react-router"
import { theme } from "./lib/mui/theme"
import { HomePage } from "./pages/Home"
import { CssBaseline } from "@mui/material"
import { QuoteResult } from "./pages/QuoteResult"
import { Provider } from "react-redux"
import { store } from "./store"

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/quote-result', Component: QuoteResult },
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
