# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration.spec.ts >> Register New User
- Location: tests\registration.spec.ts:4:5

# Error details

```
Error: page.goto: Could not resolve hostname
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import fs from "fs";
  3  | 
  4  | test("Register New User", async ({ page }) => {
  5  | 
  6  |     const email = `user${Date.now()}@gmail.com`;
  7  | 
> 8  |     await page.goto("/login");
     |                ^ Error: page.goto: Could not resolve hostname
  9  | 
  10 |     await page.locator("[data-qa='signup-name']")
  11 |         .fill("Automation Tester");
  12 | 
  13 |     await page.locator("[data-qa='signup-email']")
  14 |         .fill(email);
  15 | 
  16 |     await page.locator("[data-qa='signup-button']")
  17 |         .click();
  18 | 
  19 |     await page.locator("#password").fill("Password123");
  20 | 
  21 |     await page.selectOption("#days", "10");
  22 |     await page.selectOption("#months", "5");
  23 |     await page.selectOption("#years", "1999");
  24 | 
  25 |     await page.locator("#first_name").fill("Automation");
  26 |     await page.locator("#last_name").fill("Tester");
  27 |     await page.locator("#address1").fill("Bangalore");
  28 |     await page.selectOption("#country", "India");
  29 |     await page.locator("#state").fill("Karnataka");
  30 |     await page.locator("#city").fill("Bangalore");
  31 |     await page.locator("#zipcode").fill("560001");
  32 |     await page.locator("#mobile_number").fill("9999999999");
  33 | 
  34 |     await page.locator("[data-qa='create-account']").click();
  35 | 
  36 |     await expect(page.locator("[data-qa='account-created']")).toHaveText("Account Created!");
  37 | 
  38 |     fs.writeFileSync(
  39 |         "./test-data/users.json",
  40 |         JSON.stringify({
  41 |             validUser: {
  42 |                 email,
  43 |                 password: "Password123"
  44 |             }
  45 |         }, null, 4)
  46 |     );
  47 | 
  48 | });
```