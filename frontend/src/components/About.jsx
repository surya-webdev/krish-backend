function About() {
  return (
    <section className="container my-[9rem] px-4 sm:mx-auto">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
        <div>
          <img className="rounded-xl" src="./about-children.jpg" alt="about" />
        </div>
        <div>
          <h1 className="py-8 text-[2.4rem] font-semibold capitalize md:text-[3rem]">
            About us
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
