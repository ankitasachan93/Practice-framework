import { test, expect } from '../fixtures'


test.describe('Cart Checkout', () => {

       

    test('Should complete checkout successfully', async ({ loginPage, inventoryPage, cartPage, checkoutPage, page }) => {
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.addToCart()
        await inventoryPage.cartlink()
        await cartPage.inventoryItems()
        await cartPage.checkoutItems()
        await checkoutPage.checkoutInfo('Ankita','Sachan','0732')
        await checkoutPage.continuebtn()
        await checkoutPage.finishbtn()
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
        
    })

    test('should display error with no last name', async({loginPage, inventoryPage, cartPage, checkoutPage}) => {

        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.addToCart()
        await inventoryPage.cartlink()
        await cartPage.checkoutItems()
        await checkoutPage.checkoutInfo('Ankita','','0732')
        await checkoutPage.continuebtn()
        await checkoutPage.verifyErrorMessage('Error: Last Name is required')

    })

})