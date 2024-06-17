// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

function About() {
  // const t1 = gsap.timeline({
  //   defaults: { duration: 0.75, ease: "power2.out" },
  // });

  // t1.fromTo(".about-image", { x: "-100%" }, { x: "0" });
  // useGSAP(() => {});
  return (
    <section id="about" className="container my-[9rem] px-4 sm:mx-auto ">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
        <div className="about-image">
          <img className="rounded-xl" src="./about-children.jpg" alt="about" />
        </div>
        <div className="h1-z">
          <h1 className="block py-8 text-[2.4rem] font-semibold capitalize md:text-[3rem]">
            About us
            <span className="img-z block -translate-y-3">
              <img className="" src="./hero-line.svg" alt="line" />
            </span>
          </h1>
          <p className="text-xl md:text-[1.3rem]">
            At the <span className="">Krish Foundation</span>, we&apos;re all
            about helping people. We work in many areas like giving kids a good
            education and providing important hospitality services. With a
            mission to touch and improve 1 million lives. We&apos;re working to
            make a better future for everyone. Join us to make a real difference
            and help create a world where caring and kindness make things
            better.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
