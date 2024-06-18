function Transparency() {
  return (
    <section className="section container my-[2rem] px-4 sm:mx-auto">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
        <div className="h1-z">
          <h1 className="block py-8 text-[2.4rem] font-semibold capitalize md:text-[3rem]">
            A 100% Transparent NGO
            <span className="img-z block -translate-y-3">
              <img className="" src="./hero-line.svg" alt="line" />
            </span>
          </h1>
          <p className="text-xl md:text-[1.3rem]">
            At KRISH FOUNDATION, we operate with transparency and
            accountability, ensuring every donation is used effectively for our
            noble objectives. Your contributions drive our mission to create
            lasting societal impact, and we appreciate your trust in us.
            <br />
            <br />
            We handle donations with great care and accountability. Together, we
            can foster a better future through acts of kindness.
            <br /> <br />
            We maintain transparency through proper financial records, audits,
            public annual reports, and governance mechanisms for checks and
            balances, fostering trust with donors and stakeholders.
          </p>
        </div>
        <div>
          <img className="rounded-xl" src="./transparency.jpg" alt="about" />
        </div>
      </div>
    </section>
  );
  // return (
  //   <section>
  //     <div className="mx-10">
  //       <h1 className="block py-2 text-[2rem] font-semibold capitalize md:text-[3rem]">
  //         A 100% Transparent NGO
  //         <span className="img-z block -translate-y-3">
  //           <img className="" src="./hero-line.svg" alt="line" />
  //         </span>
  //       </h1>
  //     </div>
  //     <div className="conatainer">
  //       <div>
  //         <p className="mx-2 block text-justify text-xl leading-7 lg:mx-10">
  // At KRISH FOUNDATION, we operate with transparency and
  // accountability, ensuring every donation is used effectively for our
  // noble objectives. Your contributions drive our mission to create
  // lasting societal impact, and we appreciate your trust in us.
  // <br />
  // <br />
  // We handle donations with great care and accountability. Together, we
  // can foster a better future through acts of kindness.
  // <br /> <br />
  // We maintain transparency through proper financial records, audits,
  // public annual reports, and governance mechanisms for checks and
  // balances, fostering trust with donors and stakeholders.
  //         </p>
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default Transparency;
