# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: payment.spec.ts >> Complete Payment
- Location: tests\payment.spec.ts:4:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('[data-qa=\'pay-button\']')
    - locator resolved to <button id="submit" type="submit" data-qa="pay-button" class="form-control btn btn-primary submit-button">Pay and Confirm Order</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Payment
    - heading "Payment" [level=2] [ref=e45]
    - generic [ref=e49]:
      - generic:
        - generic [ref=e50]:
          - generic [ref=e51]: Name on Card
          - textbox [ref=e52]: John Smith
        - generic [ref=e53]:
          - generic [ref=e54]: Card Number
          - textbox [ref=e55]: "4111111111111111"
        - generic:
          - generic [ref=e56]:
            - generic [ref=e57]: CVC
            - textbox "ex. 311" [ref=e58]: "123"
          - generic [ref=e59]:
            - generic [ref=e60]: Expiration
            - textbox "MM" [ref=e61]: "10"
          - textbox "YYYY" [active] [ref=e64]: "2030"
        - button "Pay and Confirm Order" [ref=e66] [cursor=pointer]
  - contentinfo [ref=e68]:
    - generic [ref=e73]:
      - heading "Subscription" [level=2] [ref=e74]
      - generic [ref=e75]:
        - textbox "Your email address" [ref=e76]
        - button "" [ref=e77] [cursor=pointer]:
          - generic [ref=e78]: 
        - paragraph [ref=e79]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e83]:
      - text: Copyright © 2021 All rights reserved
      - link "File a Trademark" [ref=e84] [cursor=pointer]:
        - img [ref=e86]
        - text: File a Trademark
  - text: 
  - insertion [ref=e89]:
    - generic [ref=e92]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e94]: Discover more
      - link "Secure payment processing" [ref=e95] [cursor=pointer]:
        - generic "Secure payment processing" [ref=e96]
        - img [ref=e98]
      - link "Card payment integration" [ref=e100] [cursor=pointer]:
        - generic "Card payment integration" [ref=e101]
        - img [ref=e103]
      - link "Payment gateway service" [ref=e105] [cursor=pointer]:
        - generic "Payment gateway service" [ref=e106]
        - img [ref=e108]
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
  12 |         await this.page.goto(url);
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
> 23 |         await locator.click({
     |                       ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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