const express = require("express");
const router = express.Router();

const { calculateQuote } = require("../quotes/api3-quoteCalculation");

// POST /api/quote
router.post("/quote", (req, res) => {
const { car_value, risk_rating } = req.body || {};

  const result = calculateQuote(car_value, risk_rating);

  if (result.error) {
    return res.status(400).json(result);
  }

  return res.json(result);
});

module.exports = router;