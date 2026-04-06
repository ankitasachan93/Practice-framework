import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { LoginData } from '../data/login.data'


test.describe('User Login', () =>{

    let loginpage : LoginPage

test.beforeEach(async({page })=>{
     loginpage = new LoginPage(page)
     await loginpage.goto()
})

LoginData.users.forEach(({username, password, type, description})=>{
        test(`Login in with ${username}`, async({page})=>{
            await loginpage.login(username,password)

            if(type === 'valid'){
                console.log(`${username} logged succesfully`)
                 await expect(page).toHaveURL(LoginData.expected.dashboardUrl)
            } else {
                console.log(`${username}  ${description}`)
                await expect(loginpage.errorMessage).toBeVisible()  //test CI/CD trigger
            }
                 
        })
    })


    
})

   




    


        