const { calculateQuote } = require("../src/quotes/api3-quoteCalculation");

describe("API 3 - Quote Calculation Unit Tests", () => {
  // Sunny day scenario
  test("/sunny day scenario: (20000, 3) => yearly 600, monthly 50", () => {
    expect(calculateQuote(20000, 3)).toEqual({
      monthly_premium: 50,
      yearly_premium: 600,
    });
  });

  // Boundary — lowest risk
  test("Boundary: lowest risk rating (15000, 1)", () => {
    expect(calculateQuote(15000, 1)).toEqual({
      monthly_premium: 12.5,
      yearly_premium: 150,
    });
  });

  // Boundary — highest risk
  test("Boundary: highest risk rating (18000, 5)", () => {
    expect(calculateQuote(18000, 5)).toEqual({
      monthly_premium: 75,
      yearly_premium: 900,
    });
  });

  // Invalid: zero car value
  test("Invalid: car_value is zero", () => {
    expect(calculateQuote(0, 3)).toEqual({
      error: "there is an error",
    });
  });

  // Invalid: risk rating below range
  test("Invalid: risk_rating below range", () => {
    expect(calculateQuote(20000, 0)).toEqual({
      error: "there is an error",
    });
  });

  // Invalid: car_value as string
  test("Invalid: car_value provided as string", () => {
    expect(calculateQuote("20000", 3)).toEqual({
      error: "there is an error",
    });
  });

  // Invalid: risk rating not integer
  test("Invalid: risk_rating must be integer", () => {
    expect(calculateQuote(20000, 2.5)).toEqual({
      error: "there is an error",
    });
  });

  // Invalid: risk rating above range
  test("Invalid: risk_rating above range", () => {
    expect(calculateQuote(20000, 6)).toEqual({
      error: "there is an error",
    });
  });
});