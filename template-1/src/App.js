import { createContext, useEffect, useState } from "react";
import "./App.css";
import About from "./about";
import { FixedHeader } from "./fixed-header/fixed-header";
import { Header } from "./header/header";
import Media from "./media";
import Projects from "./projects";
import { useUserData } from "./useUserData";
import Awards from "./awards/awards";
import Testimonials from "./testimonials/testimonials";

export const UserContext = createContext();

function App() {
  const { data } = useUserData();


  return (
    <UserContext.Provider value={data}>
      <Header />
      <About />
      <Projects />
      <Media />
      <Awards />
      <Testimonials />
      <FixedHeader />
    </UserContext.Provider>
  );
}

export default App;
