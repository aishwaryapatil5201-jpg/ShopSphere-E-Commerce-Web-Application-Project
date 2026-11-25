# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Add Product To Cart
- Location: tests\cart.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#cartModal a[href=\'/view_cart\']')

```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class ProductPage extends BasePage {
  5  | 
  6  |     searchBox: Locator;
  7  |     searchButton: Locator;
  8  |     productList: Locator;
  9  |     firstProduct: Locator;
  10 |     addToCart: Locator;
  11 |     viewCart: Locator;
  12 | 
  13 |     constructor(page: Page) {
  14 |         super(page);
  15 | 
  16 |         this.searchBox = page.locator("#search_product");
  17 |         this.searchButton = page.locator("#submit_search");
  18 | 
  19 |         this.productList = page.locator(".product-image-wrapper");
  20 | 
  21 |         this.firstProduct = page.locator(".product-image-wrapper").first();
  22 | 
  23 |         this.addToCart = page.locator(".product-overlay .add-to-cart").first();
  24 | 
  25 |         this.viewCart = page.locator("#cartModal a[href='/view_cart']");
  26 |     }
  27 | 
  28 |     async searchProduct(productName: string) {
  29 |         await this.searchBox.fill(productName);
  30 |         await this.searchButton.click();
  31 |     }
  32 | 
  33 |     async verifyProduct(productName: string) {
  34 |         await expect(
  35 |             this.page.locator(`.productinfo p:text-is("${productName}")`)
  36 |         ).toBeVisible();
  37 |     }
  38 | 
  39 |     async addFirstProduct() {
  40 | 
  41 |         await this.firstProduct.scrollIntoViewIfNeeded();
  42 | 
  43 |         // The site displays ads over product cards in some browser runs.
  44 |         // Force the interaction so those third-party overlays cannot intercept it.
  45 |         await this.firstProduct.hover({ force: true });
  46 |         await this.addToCart.click({ force: true });
  47 | 
  48 |         // Wait for the actionable link rather than the modal animation container.
  49 |        // await expect(this.viewCart).toBeVisible({ timeout: 15000 });
> 50 |         await this.viewCart.click();
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  51 |     }
  52 | }
```