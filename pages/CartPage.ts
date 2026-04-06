import { Locator, Page } from "@playwright/test"

export class CartPage{

    readonly page: Page
    readonly checkoutButton:Locator
    readonly continueShopping:Locator
    readonly cartItem :Locator
    readonly removeButton:Locator


    constructor(page:Page){
        this.page = page
        this.checkoutButton =  page.locator('[data-test="checkout"]')
        this.continueShopping =  page.locator('[data-test="continue-shopping"]')
        this.cartItem =  page.locator('[data-test="inventory-item-name"]')
        this.removeButton = page.locator('[data-test="remove-sauce-labs-bike-light"]')

    }

    async removeItem(){
        await this.removeButton.click()
    }

    async goToCheckout(){
        await this.checkoutButton.click()
    }

    async continueShoppint(){
        await this.continueShopping.click()
    }

}





    