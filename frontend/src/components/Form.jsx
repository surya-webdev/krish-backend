import { useState } from "react";
import Button from "./Button";

function Form() {
  const [formState, setFormState] = useState({
    full_name: "",
    phone: "",
    email: "",
    amount: 100,
    currency: "INR",
    message: "",
  });

  const currencies = ["INR", "USD", "EUR", "GBP", "JPY", "AUD"];

  const handlePhone = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormState((pre) => ({ ...pre, phone: value }));
    }
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...formState }),
        },
      );

      const data = await res.json();
      handlePaymentVerify(data);
    } catch (error) {
      console.log(error);
    }
  };

  // handlePaymentVerify Function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Krish Foundation",
      description: "Test Mode", // change
      order_id: data.order.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch(
            `${import.meta.env.VITE_BACKEND_HOST_URL}/verify`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            },
          );

          const verifyData = await res.json();

          if (verifyData.success) {
            setFormState({
              full_name: "",
              phone: "",
              email: "",
              amount: 100,
              currency: "INR",
              message: "",
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8", // change theme color
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <section className="container mx-auto my-[6rem]">
      <div className="mx-2 lg:mx-10">
        <h1 className="block py-8 text-[2.4rem] font-semibold capitalize md:text-[3rem]">
          Donate Now SAVE lives
          <span className="img-z block -translate-y-3">
            <img className="" src="./hero-line.svg" alt="line" />
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        <div className="form-image background-image:url(./form-text.png) relative block h-[30rem] w-full md:h-full">
          <div className="absolute bottom-[5rem] mx-10 text-slate-50">
            <span className="block text-3xl font-semibold">
              Make a Donation: Support Our Cause
            </span>
            <span className="text-[1rem] leading-[1.4rem]">
              Your generous donation helps us continue our vital work at Krish
              Foundation. Every contribution, no matter the size, makes a
              significant impact on the lives of those in need. Please fill out
              the form below to make a secure donation and support our mission
              to provide education, healthcare, and community support to
              underprivileged communities.
            </span>
          </div>
        </div>

        <form
          id="form"
          onSubmit={handlePayment}
          className="text-syne mx-2 flex flex-col gap-4 text-lg md:mx-6 md:text-xl"
        >
          <label className="" htmlFor="full_name">
            Name<span className="text-[red]">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            placeholder="John Don"
            value={formState.full_name}
            onChange={(e) =>
              setFormState((pre) => ({ ...pre, full_name: e.target.value }))
            }
            required
          />
          {/* <span className="text-red-600 text-sm">{error.full_name}</span> */}

          <label htmlFor="phone">
            Phone<span className="text-[red]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            value={formState.phone}
            onChange={handlePhone}
            placeholder="9000000000"
            pattern="^\d{10,}$"
            required
          />
          {/* <span className="text-red-600 text-sm">{error.phone}</span> */}

          <label htmlFor="email">
            Email ID<span className="text-[red]">*</span>
          </label>
          <input
            id="email"
            placeholder="example123@gmail.com"
            type="email"
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            value={formState.email}
            onChange={(e) =>
              setFormState((pre) => ({ ...pre, email: e.target.value }))
            }
            required
          />
          {/* <span className="text-red-600 text-sm">{error.email}</span> */}

          <div className="space-y-3">
            <div className="flex flex-col gap-4">
              <label htmlFor="amount">
                Amount<span className="text-[red]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formState.amount}
                  onChange={(e) =>
                    setFormState((pre) => ({ ...pre, amount: e.target.value }))
                  }
                  className="block w-full rounded-lg rounded-md border-2 border-[#E1E5EA] px-4 py-1 pe-20 shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  placeholder="0.0"
                  required
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-px text-gray-500">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={formState.currency}
                    className="block w-full rounded-md border-transparent px-2 py-1"
                    onChange={(e) =>
                      setFormState((pre) => ({
                        ...pre,
                        currency: e.target.value,
                      }))
                    }
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <span className="text-red-600 text-sm">{error.amount}</span> */}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            rows="4"
            cols="50"
            type="text"
            value={formState.message}
            className="rounded-md border-2 border-[#E1E5EA] px-4 py-1"
            onChange={(e) =>
              setFormState((pre) => ({ ...pre, message: e.target.value }))
            }
          />

          <Button />
        </form>
      </div>
    </section>
  );
}

export default Form;
