import './App.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes/router.tsx";

function App() {

    const defaultTheme = createTheme({
        palette: { mode: "light"},
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1920,
            },
        },
    });

  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App
