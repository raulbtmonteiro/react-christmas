import Header from "./components/header"
import Home from "./components/home"
import Acessories from "./components/acessories"
import Donation from "./components/donation"
import Footer from "./components/footer"
import { createGlobalStyle } from "styled-components"
import { useState } from "react"
import { light } from "./themes/light"
import { dark } from "./themes/dark"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App() {

  const[theme, setTheme] = useState(light)

  return (
    <>
      <GlobalStyle />
      <Header theme={theme}/>
      <main>
        <Home theme={theme} setTheme={setTheme} />
        <Acessories theme={theme} />
        <Donation theme={theme} />
      </main>
      <Footer theme={theme} />
    </>
  );
}