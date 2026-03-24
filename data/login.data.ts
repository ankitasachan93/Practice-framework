export const LoginData = {

    Valid_User:{
        email: 'standard_user',
        password: 'secret_sauce'
    },

    Invalid_User:[{
        email: 'standard_user',
        password: 'secret',
        description: 'Wrong Password'
    },
    {
        email: 'standard',
        password: 'secret_sauce'
    , description: 'Wrong Email'
    }
],

    EXPECTED: {
        dashboardUrl: 'https://www.saucedemo.com/inventory.html',
        errorMessage: 'Epic sadface: Username and password do not match any user in this service'
    }


}