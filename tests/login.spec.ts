import{test, expect , Page} from '@playwright/test';
import{LoginData} from '../data/login.data';
import {LoginPage} from '../pages/LoginPage';




test.describe("Login Tests",()=>{

    let loginPage: LoginPage    

    test.beforeEach(async({page}) =>{
        loginPage = new LoginPage(page);
        await loginPage.goto();
    })
    test('Should Login Sucessfully', async({page}) =>{
        
        await loginPage.login(LoginData.Valid_User.email, LoginData.Valid_User.password)
        await expect(page).toHaveURL(LoginData.EXPECTED.dashboardUrl)
    })

    LoginData.Invalid_User.forEach(({email, password, description}) =>{
     test(`should fail with ${description}`, async({}) => {
        await loginPage.login(email,password)
        await expect(loginPage.errorMessage).toBeVisible


     })

    })


})