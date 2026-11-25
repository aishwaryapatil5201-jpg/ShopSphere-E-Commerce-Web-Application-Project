# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Verify Login
- Location: tests\login.spec.ts:7:5

# Error details

```
Error: page.goto: Could not resolve hostname
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import users from "../test-data/users.json";
  3  | 
  4  | import { HomePage } from "../Pages/HomePage";
  5  | import { LoginPage } from "../Pages/LoginPage";
  6  | 
  7  | test("Verify Login", async ({ page }) => {
  8  | 
  9  |     const home = new HomePage(page);
  10 |     const login = new LoginPage(page);
  11 | 
> 12 |     await page.goto("/");
     |                ^ Error: page.goto: Could not resolve hostname
  13 | 
  14 |     await home.clickLogin();
  15 | 
  16 |     await login.loginUser(
  17 |         users.validUser.email,
  18 |         users.validUser.password
  19 |     );
  20 | 
  21 |     await expect(login.loggedIn).toBeVisible();
  22 | 
  23 | });
```