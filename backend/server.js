const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order", async (req, res) => {
  try {
    const { full_name, phone, email, amount, currency, message } = req.body;

    if (!full_name || !phone || !email || !amount || !currency) {
      return res
        .status(401)
        .json({ success: false, message: "Required input fields." });
    } else {
      // List of allowed currencies
      const allowedCurrencies = ["INR", "USD", "EUR", "GBP", "JPY", "AUD"];

      const minAmounts = {
        INR: 10000,
        USD: 135, // 100 INR to USD equivalent in cents
        EUR: 120, // 100 INR to EUR equivalent in cents
        GBP: 100, // 100 INR to GBP equivalent in pence
        JPY: 15000, // 100 INR to JPY equivalent in yen
        AUD: 200, // 100 INR to AUD equivalent in cents
      };

      if (!allowedCurrencies.includes(currency)) {
        return res
          .status(401)
          .json({
            success: false,
            message: `Currency ${currency} is not supported.`,
          });
      } else {
        if (amount * 100 < minAmounts[currency]) {
          return res
            .status(401)
            .json({
              success: false,
              message: `Minimum amount for ${currency} is ${
                minAmounts[currency] / 100
              }`,
            });
        } else {
          const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
          });

          const options = {
            amount: amount * 100,
            currency: currency,
            receipt: full_name + " " + phone + " " + email + " " + message,
          };
          const order = await razorpay.orders.create(options);

          if (!order) {
            return res
              .status(500)
              .json({ success: true, message: "Internal server" });
          }
          return res.status(200).json({ success: true, order });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server" });
  }
});

app.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      res
        .status(401)
        .json({ success: false, message: "Required input fields." });
    } else {
      // Create Sign
      const sign = razorpay_order_id + "|" + razorpay_payment_id;

      // Create ExpectedSign
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(sign.toString())
        .digest("hex");

      // Create isAuthentic
      const isAuthentic = expectedSign === razorpay_signature;

      // Condition
      if (isAuthentic) {
        // Send Message
        res
          .status(200)
          .json({ success: true, message: "Payement Successfully" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
});

app.use(express.static(path.resolve(__dirname + "/../" + "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../" + "frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
