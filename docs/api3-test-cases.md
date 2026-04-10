# API 3 – Test Cases

| Test Case Number | Input (car_value, risk_rating) | Expected Output (monthly, yearly) | Test Description |
|---:|---|---|---|
| 1 | 20000, 3 | `{ "monthly_premium": 50, "yearly_premium": 600 }` | Sunny day scenario |
| 2 | 15000, 1 | `{ "monthly_premium": 12.5, "yearly_premium": 150 }` | Valid input lowest risk boundary |
| 3 | 18000, 5 | `{ "monthly_premium": 75, "yearly_premium": 900 }` | Valid input highest risk boundary |
| 4 | 1, 5 | `{ "monthly_premium": 0, "yearly_premium": 0.05 }` | Boundary test with smallest positive car value |
| 5 | 30000, 4 | `{ "monthly_premium": 100, "yearly_premium": 1200 }` | Valid mid–to-high risk scenario |
| 6 | 0, 3 | `{ "error": "there is an error" }` | Invalid input: car_value is zero |
| 7 | -5000, 2 | `{ "error": "there is an error" }` | Invalid input: car_value is negative |
| 8 | 20000, 0 | `{ "error": "there is an error" }` | Invalid input: risk_rating below allowed range |
| 9 | 20000, 6 | `{ "error": "there is an error" }` | Invalid input: risk_rating above allowed range |
| 10 | "20000", 3 | `{ "error": "there is an error" }` | Invalid input: car_value provided as string |
| 11 | 20000, "3" | `{ "error": "there is an error" }` | Invalid input: risk_rating provided as string |
| 12 | 20000, 2.5 | `{ "error": "there is an error" }` | Invalid input: risk_rating must be an integer |
| 13 | missing car_value, 3 | `{ "error": "there is an error" }` | Invalid input: missing car_value field |
| 14 | 20000, missing risk_rating | `{ "error": "there is an error" }` | Invalid input: missing risk_rating field |
| 15 | 20000, "two" | `{ "error": "there is an error" }` | Invalid input: risk_rating provided as text |
| 16 | "ten thousand", 1 | `{ "error": "there is an error" }` | Invalid input: car_value provided as text |