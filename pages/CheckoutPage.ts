import { Locator, Page, expect } from "@playwright/test";

export class CheckoutPage{
    readonly page :Page
    readonly Checkoutinfor : Locator
    readonly firstName :Locator
    readonly lastName :Locator
    readonly zipCode:Locator
    readonly errorBtn :Locator
    readonly continue:Locator
    readonly finishBtn:Locator
    readonly orderCompletion:Locator
    readonly errorMessage:Locator

    constructor(page:Page){
        this.page = page
        this.Checkoutinfor =  page.getByText('Checkout: Your Information', { exact: true })
        this.firstName =  page.getByPlaceholder('First Name')
        this.lastName =  page.getByPlaceholder('Last Name')
        this.zipCode =  page.getByPlaceholder('Zip/Postal Code')
        this.errorBtn = page.locator('[data-test="error-button"]')
        this.continue =  page.locator('[data-test="continue"]')
        this.errorMessage  = page.locator('[data-test="error"]')   
        this.finishBtn =  page.getByRole('button', { name: 'Finish' })
        this.orderCompletion =  page.getByRole('heading', { name: 'Thank you for your order!' })
    }

    async checkoutInfo(firstname:string, lastname:string, zip:string){
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.zipCode.fill(zip)
        
    
    }
    async continuebtn(){
        await this.continue.click()
        
    }

    async finishbtn(){
        await this.finishBtn.click()
    }
    

    async orderComplete(){
        await expect(this.orderCompletion).toBeVisible()
    }

    async pageVerify(){
        await expect( this.Checkoutinfor).toBeVisible()
        await expect(this.firstName).toBeVisible()
        await expect(this.lastName).toBeVisible()
        await expect(this.zipCode).toBeVisible()
        await expect(this.continue).toBeVisible()

    }
     async verifyErrorMessage(expectedError: string) {
        await expect(this.errorMessage).toBeVisible()              // ← new!
        await expect(this.errorMessage).toContainText(expectedError)
    }

}