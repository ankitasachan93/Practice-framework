import process from "process"
import{test, expect} from "../fixtures"


test.describe('End to End',()=>{
        

    test('End to End flow', async({page, loginpage,inventorypage,cartpage,checkoutpage}) => {
        await loginpage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!) //Dashboard login with username=satndard_user and pasword=secret_sauce
        await expect(page).toHaveURL("/inventory.html")
        await inventorypage.addtoCart()
        await expect( page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible() 
        await expect( page.getByText('1', { exact: true })).toBeVisible()
        await inventorypage.gotoCart()
        await expect( page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Bike Light')
        await cartpage.goToCheckout()
        await checkoutpage.fillDetails('Ankita', 'Sachan','0632')
        await checkoutpage.clickContinue()
        await checkoutpage.clickFinish()


    })

})