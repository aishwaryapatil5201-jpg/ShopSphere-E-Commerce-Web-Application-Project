# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> Checkout Flow
- Location: tests\checkout.spec.ts:10:5

# Error details

```
Error: page.goto: Timeout was reached
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  | 
  5  |     protected page: Page;
  6  | 
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |     }
  10 | 
  11 |     async navigate(url: string) {
> 12 |         await this.page.goto(url);
     |                         ^ Error: page.goto: Timeout was reached
  13 |     }
  14 | 
  15 |     async click(locator: Locator) {
  16 |         await locator.waitFor({
  17 |             state: 'visible',
  18 |             timeout: 15000
  19 |         });
  20 | 
  21 |         await locator.scrollIntoViewIfNeeded();
  22 | 
  23 |         await locator.click({
  24 |             timeout: 15000
  25 |         });
  26 |     }
  27 | 
  28 |     async fill(locator: Locator, value: string) {
  29 |         await locator.waitFor({
  30 |             state: 'visible',
  31 |             timeout: 15000
  32 |         });
  33 | 
  34 |         await locator.fill(value);
  35 |     }
  36 | 
  37 |     async type(locator: Locator, value: string) {
  38 |         await locator.waitFor({
  39 |             state: 'visible',
  40 |             timeout: 15000
  41 |         });
  42 | 
  43 |         await locator.pressSequentially(value);
  44 |     }
  45 | 
  46 |     async getText(locator: Locator): Promise<string> {
  47 |         return (await locator.textContent()) ?? '';
  48 |     }
  49 | 
  50 |     async isVisible(locator: Locator): Promise<boolean> {
  51 |         return await locator.isVisible();
  52 |     }
  53 | 
  54 |     async waitForPage() {
  55 |         await this.page.waitForLoadState('networkidle');
  56 |     }
  57 | 
  58 |     async takeScreenshot(name: string) {
  59 |         await this.page.screenshot({
  60 |             path: `screenshots/${name}.png`,
  61 |             fullPage: true
  62 |         });
  63 |     }
  64 | 
  65 |     async verifyTitle(title: string) {
  66 |         await expect(this.page).toHaveTitle(title);
  67 |     }
  68 | 
  69 | }
```