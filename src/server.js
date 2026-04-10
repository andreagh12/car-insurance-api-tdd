const express = require("express");
const app = express();

// import route
const quoteRoute = require("./routes/api3-quoteCalculation.route");

// middleware
app.use(express.json());

// route under /api
app.use("/api", quoteRoute);

// start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});