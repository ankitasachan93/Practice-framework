import{test, expect , Page} from '@playwright/test';
import{LoginData} from '../data/login.data';
import {LoginPage} from '../pages/LoginPage';




test.describe("Login Tests",()=>{

    let loginPage: LoginPage    

    test.beforeEach(async({page}) =>{
        loginPage = new LoginPage(page);  //This calls the constructor of the LoginPage class and initializes the page and locators
        await loginPage.goto();
    })
    
   

       LoginData.Users.forEach(({username,password,type , description})=>{
        test(`Login test - ${description ?? username}`,async({page}) => {
            await loginPage.login(username,password)

            if(type ==='valid'){
                console.log(username)
                await expect(page).toHaveURL(LoginData.Expected.dashboardUrl)
                console.log(`test passed with ${username},${description}`)
            }
            else if(type === 'invalid'){
                await expect(loginPage.errorMessage).toBeVisible()
                console.log(`test failed with ${username},${description}`)
            }
            


        })

    })


})