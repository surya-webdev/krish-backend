import About from "./components/About";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Swipers from "./components/Swiper";

import Testimonial from "./components/Testimonial";
import Transparency from "./components/Transparency";
import Footer from "./components/Footer";

import { useEffect } from "react";

function App() {
  //
  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.isIntersecting) {
            entry.target.classList.remove("section--hidden");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    const section = document.querySelectorAll(".section");

    section.forEach((entries) => {
      observer.observe(entries), entries.classList.add("section--hidden");
    });
  }, []);

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
