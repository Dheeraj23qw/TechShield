const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const { connectToDB } = require("./mongoDB.js");
const stripe = require("stripe")(
  "sk_test_51OynzPSAgwRpikwc86IctcatnOL2gHP6IgPsjc7Ocpp2EPpjI7yYCX2RAwUQYMA2x7tnpWXEwmjl2H77NPpSvQuC00wBMKCdaL"
);

// Import routes
const routes = require("./Routes/userRoutes.js");
const cmtRoutes = require("./Routes/cmt-routes.js");
const formRoutes = require("./Routes/formRoutes.js");


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", routes);
app.use("/api/comments", cmtRoutes);
app.use("/api/form", formRoutes);

// Connect to MongoDB database
connectToDB();


//payment route
app.post("/api/create-checkout", async (req, res) => {
  console.log(req.body)
    const { cartItems, totalBill } = req.body;
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }));
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });
    res.json({ id: session.id });
  });

  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });