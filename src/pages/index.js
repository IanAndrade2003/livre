import React from "react";
import GlobalStyle from "../components/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main"

export default function Index() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Main />
      <Footer />
    </>
  );
}