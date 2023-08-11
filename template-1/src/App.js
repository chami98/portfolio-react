import { createContext } from "react";
import "./App.css";
import About from "./about";
import { FixedHeader } from "./fixed-header/fixed-header";
import { Header } from "./header/header";
import Media from "./media";
import Projects from "./projects";
import { useUserData } from "./utils/useUserData";
import Awards from "./awards/awards";

import Testimonials from "./testimonials/testimonials";

import { Experiance } from "./experiance/experiance";
import { Contact } from "./contact/contact";
import { FixedHeaderMobile } from "./fixed-header/fixed-header-mobile";
import { Loader } from "./utils/loader";
import { Education } from "./education/education";
import { useInsertLink } from "./utils/use-insert-link";

export const UserContext = createContext();

const SectionToCom = {
  media_sec: <Media />,
  project_section: <Projects />,
  testimonial_section: <Testimonials />,
  experience_section: <Experiance />,
  education_sec: <Education />,
  awards_section: <Awards />,
};
function App() {
  useInsertLink("platform");

  const { data, loading } = useUserData();

  console.log(data);
  if (loading) {
    return <Loader />;
  }

  return (
    <UserContext.Provider value={data}>
      <Header />

      <About />

      {data?.sectionOrder?.map((s) => SectionToCom[s])}

      <Contact />
      <FixedHeader />
      <FixedHeaderMobile />
    </UserContext.Provider>
  );
}

export default App;
