function Hero() {
  return (
    <section className="container mx-auto py-12 sm:py-[8rem]">
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <p className="mx-6 font-syne text-3xl font-bold leading-normal md:text-5xl">
            Building a{" "}
            <span className="relative block lg:inline-block">
              Better Society,
              <img
                className="absolute -translate-y-4 sm:-translate-y-2"
                src="./hero-line.svg"
                alt="line"
              />
            </span>
            Your <span className="block"> Contribution, Our Commitment.</span>
          </p>
        </div>
        <div>
          <p className="px-4 leading-normal lg:px-[22rem]">
            Join us on our mission to transform 1 million lives. Your support
            can bring hope, change, and opportunity to those in need. Together,
            we can make a difference.
          </p>
        </div>
        <div className="relative">
          <button
            className="z-0 w-full rounded-lg bg-black px-10 py-3 font-syne text-white"
            href="#"
          >
            Donate Now
          </button>
          <div className="linearss absolute top-0 -z-10 h-8 w-32"></div>
          <div className="linear-pink absolute right-1 -z-10 h-4 w-32"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
