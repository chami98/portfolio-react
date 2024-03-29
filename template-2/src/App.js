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
import { Loader } from "./utils/loader";


export const UserContext = createContext();


const SectionToCom = {
  media_sec: <Media />,
  project_section: <Projects />,
  testimonial_section: <Testimonials />,
  experience_section: <Experiance />,
  // education_sec: <Education />,
  education_sec: <div>Educattion</div>,
  awards_section: <Awards />,
};

function App() {
  const { data, loading } = useUserData();

  if (loading) {
    return <Loader />;
  }


  return (
    <UserContext.Provider value={data}>
      <Header />
      <About />
      
      {data?.sectionOrder?.map((s) => SectionToCom[s])}

      <Contact />
      {/* <FixedHeader /> */}
      <FixedHeaderMobile />
    </UserContext.Provider>
  );
}

export default App;
