function calculateQuote(carValue, riskRating) {
  const error = { error: "there is an error" };

  const isValidNumber = (v) =>
    typeof v === "number" && Number.isFinite(v);

  // Validate types
  if (!isValidNumber(carValue) || !isValidNumber(riskRating)) {
    return error;
  }

  // Validate car value
  if (carValue <= 0) return error;

  // Validate risk rating (must be integer 1–5)
  if (!Number.isInteger(riskRating)) return error;
  if (riskRating < 1 || riskRating > 5) return error;

  const yearly = (carValue * riskRating) / 100;
  const monthly = yearly / 12;

  return {
    monthly_premium: monthly,
    yearly_premium: yearly,
  };
}

module.exports = { calculateQuote };