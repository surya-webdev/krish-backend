import About from "./components/About";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Swipers from "./components/Swiper";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Swipers />
      <About />
      <Programs />
      <Form />
    </>
  );
}

export default App;
