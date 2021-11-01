import Hero from "./components/Hero/Hero";
import './app.scss'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
function App() {
  return (
    <>
    <Intro />
    <Navbar />
    <Hero />
    </>
  );
}

export default App;
