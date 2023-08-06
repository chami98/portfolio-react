import { createContext, } from "react";
import "./App.css";
import About from "./about";
// import { FixedHeader } from "./fixed-header-old/fixed-header";
import { Header } from "./header/header";
import Media from "./media";
import Projects from "./projects";
import Experiance from "./experiance/experiance";
import Testimonials from "./testimonials/testimonials";
import { useUserData } from "./utils/useUserData";

import './App.css';
import Awards from "./awards/awards";
import { Contact } from "./contact/contact";
import { FixedHeaderMobile } from "./fixed-header/fixed-header-mobile";


export const UserContext = createContext();

function App() {
  const { data } = useUserData();


  return (
    <UserContext.Provider value={data}>
      <Header />
      <About />
      <Projects />
      <Media />
      <Experiance />
      <Awards />
      <Testimonials />
      <Contact />
      {/* <FixedHeader /> */}
      <FixedHeaderMobile />
    </UserContext.Provider>
  );
}

export default App;
