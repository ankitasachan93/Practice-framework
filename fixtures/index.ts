import {test as base, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { InventoryPage } from '../pages/InventoryPage'

type MyFixture = {
    loginpage:LoginPage
    cartpage:CartPage
    checkoutpage:CheckoutPage
    inventorypage:InventoryPage
}

export const test = base.extend<MyFixture>({

    loginpage: async({page},use) =>{
        const loginpage = new LoginPage(page)
        await loginpage.goto()
        await use(loginpage)
    },

    inventorypage:async({page}, use)=>{
        const inventoryPage = new InventoryPage(page)
        await use(inventoryPage)
    },

    checkoutpage:async({page},use)=>{
        const checkoutpage = new CheckoutPage(page)
        await use(checkoutpage)
    },

    cartpage:async({page},use)=>{
        const cartpage = new CartPage(page)
        await use(cartpage)
    }
     
    

})

export{expect}