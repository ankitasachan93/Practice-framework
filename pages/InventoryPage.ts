import { Locator, Page } from '@playwright/test'

export class InventoryPage {
    readonly page: Page  
    readonly addButton: Locator
    readonly cartLinks: Locator



    constructor(page: Page) {

        this.page = page 
        this.addButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.cartLinks = page.locator('.shopping_cart_link')
    }

    async addtoCart() {
       await this.addButton.click()
     
    }

    async gotoCart(){
        await this.cartLinks.click()
    }


}