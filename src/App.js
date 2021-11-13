import Hero from "./components/Hero/Hero";
import './app.scss'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
function App() {
  return (
    <>
    <Intro />
    <Navbar />
    <Hero />
    <Testimonials />
    <Works />
    </>
  );
}

export default App;
