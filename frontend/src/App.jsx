import About from "./components/About";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Swipers from "./components/Swiper";

import Testimonial from "./components/Testimonial";
import Transparency from "./components/Transparency";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Swipers />
      <About />
      <Programs />
      <Testimonial />
      <Transparency />
      <Form />
      <Footer />
    </>
  );
}

export default App;
