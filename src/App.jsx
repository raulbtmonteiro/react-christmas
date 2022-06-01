import Header from "./components/header"
import Home from "./components/home"
import Acessories from "./components/acessories"
import Donation from "./components/donation"
import Footer from "./components/footer"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <Acessories />
        <Donation />
      </main>
      <Footer />
    </>
  );
}