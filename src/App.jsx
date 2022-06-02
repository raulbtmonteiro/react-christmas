import { Header, Home, Acessories, Donation, Footer } from "./components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { light } from "./themes/light";
import { dark } from "./themes/dark";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App() {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <GlobalStyle />
      <Header theme={theme} />
      <main>
        <Home theme={theme} changeTheme={changeTheme} />
        <Acessories theme={theme} />
        <Donation theme={theme} />
      </main>
      <Footer theme={theme} />
    </>
  );
}
