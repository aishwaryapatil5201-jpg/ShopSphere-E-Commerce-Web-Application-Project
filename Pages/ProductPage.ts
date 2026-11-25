
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {

    searchBox: Locator;
    searchButton: Locator;
    productList: Locator;
    firstProduct: Locator;
    addToCart: Locator;
    viewCart: Locator;
    cartModal: Locator;

    constructor(page: Page) {
        super(page);

        this.searchBox = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");

        this.productList = page.locator(".product-image-wrapper");
        this.firstProduct = this.productList.first();

        this.addToCart = page.locator(
            ".product-image-wrapper .product-overlay .add-to-cart"
        ).first();

        this.cartModal = page.locator("#cartModal");
        this.viewCart = this.cartModal.locator("a[href='/view_cart']");
    }

    // Search for a product
    async searchProduct(productName: string) {

        await expect(this.searchBox).toBeVisible();
        await this.searchBox.fill(productName);

        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();

        await expect(this.productList.first()).toBeVisible();
    }

    // Verify searched product
    async verifyProduct(productName: string) {

        await expect(
            this.page.locator(".productinfo p").filter({
                hasText: productName
            }).first()
        ).toBeVisible();
    }

    // Add first product to cart
    async addFirstProduct() {

        await expect(this.firstProduct).toBeVisible();

        await this.firstProduct.scrollIntoViewIfNeeded();
        await this.firstProduct.hover();

        await expect(this.addToCart).toBeVisible();
        await this.addToCart.click();

        // Wait until the cart modal is visible
        await expect(this.cartModal).toBeVisible();

        // Wait until View Cart link is visible
        await expect(this.viewCart).toBeVisible();

        await this.viewCart.click();
    }
}
