import{test, expect} from "../fixtures"


test.describe('Testing Sorting Function',()=>{

    test('Sorting with Low to High Price', async({page,loginpage, cartpage,checkoutpage,inventorypage})=>{
        await loginpage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!)
        await expect(page).toHaveURL("/inventory.html")
        await inventorypage.sortby("lohi")
        const prices = await inventorypage.getprices()
        for(let i=0; i< prices.length-1;i++){
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1])
        }

        //To check the item added in the cart is the lowest price
        await inventorypage.addtoCart()
        await inventorypage.gotoCart()
        const lowestprice = prices[0]
        console.log(lowestprice)
        const cartprice = await page.locator('.inventory_item_price').textContent()
        const cartPriceNumber = parseFloat(cartprice!.replace('$', ''))
        await expect(cartPriceNumber).toBe(lowestprice)

        //continue with the checkout flow
        await cartpage.goToCheckout()
        await checkoutpage.fillDetails('Ankita', 'Sachan', '0738')
        await checkoutpage.clickContinue()
        await checkoutpage.clickFinish()







    })

})