import Button from "./Button";

function Programs() {
  return (
    <section className="container my-[9rem] cursor-pointer p-4 sm:mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="card-cover flex flex-col gap-3">
          <img className="rounded-lg" src="./thumb.png" alt="childrens" />
          <div className="flex flex-col justify-evenly gap-4 p-10">
            <div>
              <h2 className="w-fit rounded-lg bg-green-400 px-2 py-2 text-3xl font-semibold">
                Child Assistance
              </h2>
            </div>
            <p className="text-xl">
              At Krish Foundation, we believe in the power of education as a
              tool for change and dedicated to helping poor kids break free from
              the cycle of poverty. Our program provides essential resources
              such as food, quality education, and healthcare. We strongly
              believe every child deserves an opportunity to succeed and lead a
              fulfilling life. By donating, you can help us provide these
              children with the tools they need to build a brighter future. Your
              support can transform lives.
            </p>
            <Button />
          </div>
        </div>
        {/* 2 */}
        <div className="card-cover flex flex-col gap-3">
          <img
            className="rounded-lg"
            src="./old-citizens.jpg"
            alt="childrens"
          />
          <div className="flex flex-col justify-evenly gap-4 p-10">
            <div>
              <h2 className="w-fit rounded-lg bg-red-400 px-2 py-2 text-3xl font-semibold">
                Hospitality for Everyone
              </h2>
            </div>
            <p className="text-xl">
              We are committed to offering compassionate hospitality services to
              those in need, including the elderly, disabled individuals, and
              the poor. Our Hospitality Services program provides food, shelter,
              medical care, and emotional support to ensure that everyone
              receives the care and respect they deserve. Your donations can
              make a significant difference, providing the necessary resources
              to help these individuals live with dignity and comfort. Join us
              in making a positive impact on their lives.
            </p>
            <Button />
          </div>
        </div>
        {/* 3 */}
        <div className="card-cover items-self-center col-span-full flex flex-col gap-3 justify-self-center md:col-span-1 md:w-1/2 lg:w-full">
          <img
            className="rounded-lg"
            src="./india-citizens.jpg"
            alt="childrens"
          />
          <div className="flex flex-col justify-evenly gap-3 p-10">
            <div>
              <h2 className="w-fit rounded-lg bg-blue-400 px-2 py-2 text-3xl font-semibold">
                Community Assistance
              </h2>
            </div>
            <p className="text-xl">
              Our mission is to assist community members in hardship. Our
              Community Assistance program offers services like emergency
              shelter, medical care, and education. Addressing these needs helps
              individuals and families regain stability and improve their lives.
              Your support allows us to expand these essential services and
              create lasting change.
            </p>

            <Button className="self-end" />
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Programs;
