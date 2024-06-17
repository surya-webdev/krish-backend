import { Autoplay, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { MdLocationOn } from "react-icons/md";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";

function Testimonial() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="h-full w-full cursor-pointer lg:px-2">
        <div className="mx-10">
          <h1 className="block py-2 text-[2.4rem] font-semibold capitalize md:text-[3rem]">
            Testimonial
            <span className="img-z block -translate-y-3">
              <img className="" src="./hero-line.svg" alt="line" />
            </span>
          </h1>
        </div>
        <Swiper
          slidesPerView={
            viewportWidth >= 900 ? 3 : viewportWidth >= 600 ? 2 : 1
          }
          spaceBetween={30}
          freeMode={true}
          autoplayStop={true}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="flex lg:mx-10 lg:gap-20"
        >
          <SwiperSlide>
            <div className="card-covers my-10 flex h-full w-full flex-col p-4">
              <p className="text-lg">
                &quot;I&apos;ve been following the work of Krish Foundation for
                long time , and I&apos;m constantly blown away by the impact
                they&apos;re making in communities across India.
                <span className="text-[#87c349]">
                  {" "}
                  From providing quality education to underprivileged kids to
                  ensuring the elderly have access to healthcare and
                  companionship, these folks are doing it all with so much
                  heart.
                </span>{" "}
                Kudos to the entire team!&quot;
              </p>
              <div className="my-4">
                <span className="flex items-center gap-4">
                  <img className="w-[4rem] rounded-[50%]" src="./ayesh.jpg" />
                  <span>
                    <p className="capatalize items-center text-xl font-medium">
                      {" "}
                      Riya Mehta{" "}
                    </p>
                    <p className="capatalize flex items-center">
                      <MdLocationOn />
                      <span>Delhi</span>
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide>
            <div className="card-covers my-10 flex h-full w-full flex-col p-4">
              <p className="text-xl">
                &quot;Krish Foundation was one of the first organizations on the
                ground, providing relief supplies and setting up temporary
                shelters. Their quick response and compassion during our time of
                crisis will forever be etched in my memory. These people are the
                real deal.&quot;
              </p>
              <div className="my-4">
                <span className="flex items-center gap-4">
                  <img
                    className="h-[4rem] w-[4rem] rounded-[50%]"
                    src="./rahul.jpg"
                  />
                  <span>
                    <p className="capatalize items-center text-xl font-medium">
                      {" "}
                      Rahul{" "}
                    </p>
                    <p className="capatalize flex items-center">
                      <MdLocationOn />
                      <span>Chennai</span>
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
          {/* 3 */}
          <SwiperSlide>
            <div className="card-covers my-10 flex h-full w-full flex-col p-4">
              <p className="text-lg">
                &quot;Transparency and accountability are the hallmarks of the
                Krish Foundation.
                <span className="text-[#87c349]">
                  Their commitment to ensuring every donation is utilized
                  effectively and their willingness to share detailed reports
                  have earned them the trust and respect of countless donors
                  like myself.
                </span>
                &quot;
              </p>
              <div className="my-4">
                <span className="flex items-center gap-4">
                  <img
                    className="h-[4rem] w-[4rem] rounded-[50%]"
                    src="./sivanesan.jpeg"
                  />
                  <span>
                    <p className="capatalize items-center text-xl font-medium">
                      Sivanesan
                    </p>
                    <p className="capatalize flex items-center">
                      <MdLocationOn />
                      <span>Bengaluru</span>
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-covers my-10 flex h-full w-full flex-col p-4">
              <p className="text-lg">
                &quot;The Krish Foundation&apos;s work in empowering communities
                through sustainable development initiatives is nothing short of
                inspiring. Their holistic approach, which addresses education,
                healthcare, and economic opportunities, has transformed the
                lives of countless individuals across India. I am honored to
                support their noble cause. &quot;
              </p>
              <div className="my-4">
                <span className="flex items-center gap-4">
                  <img
                    className="h-[4rem] w-[4rem] rounded-[50%]"
                    src="./thompsan.jpg"
                  />
                  <span>
                    <p className="capatalize items-center text-xl font-medium">
                      Emma Thompson
                    </p>
                    <p className="capatalize flex items-center">
                      <MdLocationOn />
                      <span>London</span>
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Testimonial;
