import { useSelector } from "react-redux";

import Home from "./pages/home/Home";

import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
