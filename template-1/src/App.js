import "./App.css";
import About from "./about";
import { FixedHeader } from "./fixed-header/fixed-header";
import { Header } from "./header/header";
import Media from "./media";
import Projects from "./projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Media />

      <FixedHeader />
    </>
  );
}

export default App;
