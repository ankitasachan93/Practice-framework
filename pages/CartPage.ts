import {Page,Locator, expect} from '@playwright/test'

export class CartPage{
    readonly page:Page
    readonly cartItem :Locator
    readonly removeBtn :Locator
    readonly continueshopping : Locator
    readonly checkout :Locator



    constructor(page:Page){
        this.page = page
        this.cartItem = page.locator('[data-test="inventory-item"]')
        this.removeBtn = page.getByRole('button', { name: 'Remove' })
        this.continueshopping = page.getByRole('button', { name: 'Continue Shopping' })
        this.checkout = page.getByRole('button', { name: 'Checkout' })
    }

    async inventoryItems(){
        await expect(this.cartItem).toBeVisible()
        await expect(this.removeBtn).toBeVisible()
        await expect(this.continueshopping).toBeVisible()
        
    }

    async removeItem(){
        await this.removeBtn.click()
    }

    async continueShopping(){
        await this.continueshopping.click()
    }

    async checkoutItems(){
        await this.checkout.click()
    }
}