import { Locator, Page } from '@playwright/test'

export class InventoryPage {
    readonly page: Page  
    readonly addButton: Locator
    readonly cartLinks: Locator
    readonly dropdown:Locator
    readonly productPrices:Locator



    constructor(page: Page) {

        this.page = page 
        this.addButton =  page.locator('button').filter({ hasText: 'Add to cart' }).first()
        this.cartLinks = page.locator('.shopping_cart_link')
        this.dropdown =   page.getByRole('combobox')
        this.productPrices = page.locator('[data-test="inventory-item-price"]')
    }

    async addtoCart() {
       await this.addButton.click()
     
    }

    async gotoCart(){
        await this.cartLinks.click()
    }

    async sortby(option:string){
        await this.dropdown.selectOption(option)
    }

    async getprices(): Promise<number[]> {
        const priceTexts= await this.productPrices.allTextContents()
        return priceTexts.map(price => parseFloat(price.replace('$', '')))


    }


}