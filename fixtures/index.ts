import{ test as base, expect} from '@playwright/test';
import{ LoginPage} from '../pages/LoginPage';
import{ InventoryPage} from '../pages/InventoryPage';
import{ CheckoutPage} from '../pages/CheckoutPage';
import{ CartPage} from '../pages/CartPage';


type MyFixtures ={
    loginPage:LoginPage
    inventoryPage:InventoryPage
    checkoutPage:CheckoutPage
    cartPage:CartPage

}

export const test = base.extend<MyFixtures>({
    loginPage : async({page}, use)=>{
        const lp = new LoginPage(page)
        await lp.goto()
        await use(lp)
    },

    inventoryPage :async({page}, use)=>{
        const ip = new InventoryPage(page)
        await use(new InventoryPage(page))
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page))
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    }


})

export {expect}