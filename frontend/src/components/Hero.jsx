import trigger from "../../helper/trigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    const t1 = gsap.timeline({
      defaults: { duration: 0.75, ease: "power2.out" },
    });
    t1.fromTo(
      ".text-hero",
      { scale: 1.3 },
      { scale: 1, duration: 2.5, delay: 0.3, ease: "elastic.out(1,0.3)" },
    );

    t1.fromTo(".hero-1", { x: "200%" }, { x: 0 }, "<20%");
    t1.fromTo(".hero-2 ", { y: "-100%" }, { y: 0 }, "<20%");
    t1.fromTo(".hero-3", { y: "-100%" }, { y: 0 }, "<20%");
  });
  return (
    <>
      <section className="text-hero container relative mx-auto py-12 sm:py-[8rem]">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="">
            <p className="hero-1 mx-6 font-syne text-3xl font-bold leading-normal md:text-5xl">
              <span className="inline-block">Building a </span>
              {""}
              <span className="relative block lg:inline-block">
                Better Society,
                <img
                  className="absolute -translate-y-4 sm:-translate-y-2"
                  src="./hero-line.svg"
                  alt="line"
                />
              </span>
              <span className="inline-block">Your</span>
              <span className="block"> Contribution, Our Commitment.</span>
            </p>
          </div>
          <div className="hero-2">
            <p className="px-4 leading-normal lg:px-[22rem]">
              Join us on our mission to transform 1 million lives. Your support
              can bring hope, change, and opportunity to those in need.
              Together, we can make a difference.
            </p>
          </div>
          <div className="hero-3 relative">
            <button
              onClick={(e) => trigger(e)}
              className="z-0 w-full rounded-lg bg-black px-10 py-3 font-syne text-white"
              href="#form"
            >
              Donate Now
            </button>
            <div className="linearss absolute top-0 -z-10 h-8 w-32"></div>
            <div className="linear-pink absolute right-1 -z-10 h-4 w-32"></div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-2 z-[10000] h-[4rem] w-[4rem]">
        <a href="#">
          <img src="./social.png" alt="contact" />
        </a>
      </div>
    </>
  );
}

export default Hero;
