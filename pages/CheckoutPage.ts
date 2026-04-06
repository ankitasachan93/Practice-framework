import {Locator, Page} from "@playwright/test"

export class CheckoutPage{
    readonly page:Page
    readonly firstName:Locator
    readonly lastName:Locator
    readonly Zip:Locator
    readonly continueButton:Locator
    readonly cancelButton:Locator
    readonly error:Locator
    readonly orderCompete:Locator
    


    constructor(page:Page){
        this.page=page
        this.firstName =  page.locator('[data-test="firstName"]')
        this.lastName=  page.locator('[data-test="lastName"]')
        this.Zip=  page.locator('[data-test="postalCode"]')
        this.continueButton= page.locator('input[name="continue"]')
        this.cancelButton= page.locator('[data-test="cancel"]')
        this.error=  page.locator('[data-test="error"]')
        this.orderCompete=  page.locator('[data-test="finish"]')
    }

    async fillDetails(fname:string,lname:string, zip:string){
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.Zip.fill(zip)
        

    }

    async clickContinue(){
        await this.continueButton.click()

    }

    async clickFinish(){
        await this.orderCompete.click()

    }

}