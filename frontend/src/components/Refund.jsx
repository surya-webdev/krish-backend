function Refund() {
  return (
    <section
      id="about"
      className={`${"section"} container my-[2rem] px-4 sm:mx-auto`}
    >
      <div className="h1-z">
        <h1 className="block py-2 text-[2.4rem] font-semibold capitalize md:text-[3rem]">
          Refund & Privacy policy
          <span className="img-z block -translate-y-3">
            <img className="" src="./hero-line.svg" alt="line" />
          </span>
        </h1>
      </div>
      <p>
        <p className="text-xl md:text-[1.3rem]">
          All donations made to Krish Foundation are non-refundable. As a
          non-profit organization, we rely on the generosity of our donors to
          continue our mission of saving and helping lives.
          <br />
          <br />
          At Krish Foundation, we respect your privacy and are committed to
          protecting your personal information. We collect only necessary
          information required for processing donations and communicating with
          our supporters. Your personal information will never be sold, rented,
          or shared with third parties for marketing purposes. We employ
          industry-standard security measures to protect your data from
          unauthorized access or disclosure.
          <br /> <br />
        </p>
      </p>
    </section>
  );
}

export default Refund;
