import{ expect, Locator, Page} from '@playwright/test';

export class InventoryPage{
    readonly page :Page
    readonly addtoCart : Locator
    readonly cartLink : Locator
    readonly addBikeLight: Locator
    readonly cartBadge: Locator


    constructor(page:Page){
        this.page = page
        this.addtoCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cartLink = page.locator('[data-test="shopping-cart-link"]')
        this.addBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.cartBadge    = page.locator('.shopping_cart_badge')

    }

    async addToCart(){
        await this.addtoCart.click()
    }

    async cartlink(){
        await this.cartLink.click()
    }
    async addMultipleItems() {                    
        await this.addtoCart.click()
        await this.addBikeLight.click()
    }
    async verifyCartCount(count: string) {        
        await expect(this.cartBadge).toHaveText(count)
    }


}