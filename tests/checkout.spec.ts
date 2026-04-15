import process from "process"
import{test, expect} from "../fixtures"


test.describe('End to End',()=>{
        

    test('End to End flow', async({page, loginpage,inventorypage,cartpage,checkoutpage}) => {
        await loginpage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!) //Dashboard login with username=satndard_user and pasword=secret_sauce
        await expect(page).toHaveURL("/inventory.html")
        const itemname = await page.locator('[data-test="inventory-item-name"]').first().textContent()
        console.log(itemname)
        await inventorypage.addtoCart()
        await inventorypage.gotoCart()
        await expect( page.locator('[data-test="inventory-item-name"]')).toHaveText(itemname!)
        await cartpage.goToCheckout()
        await checkoutpage.fillDetails('Ankita', 'Sachan','0632')
        await checkoutpage.clickContinue()
        await checkoutpage.clickFinish()


    })

    test("checkout without cart item",async({page, loginpage,inventorypage,cartpage,checkoutpage})=>{
        await loginpage.login(process.env.LOGIN_USERNAME!,process.env.LOGIN_PASSWORD!)
        await expect(page).toHaveURL('/inventory.html')
        await inventorypage.gotoCart()
        await expect(page).toHaveURL('/cart.html')
        await cartpage.goToCheckout()
        await expect(page).toHaveURL('/checkout-step-one.html')
        await checkoutpage.fillDetails('Ankita', 'Sachan', '110078')
        await checkoutpage.clickContinue()
        await expect(page).toHaveURL('/checkout-step-two.html')
        await checkoutpage.clickFinish()
        if(await page.getByRole('button', { name: 'Back Home' }).isVisible()){
            console.log("Order placed without Item")
        }else{
            console.log("Order not placed because Cart was empty")
        }





    })
    

})