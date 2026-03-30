
interface Expected{
    dashboardUrl:string
    errorMessage:string
}

interface Users{
    username:string
    password:string
    type: 'valid'| 'invalid'
    description: string
}

interface LoginData{
    
    Users: Users[]
    Expected: Expected
}

export const LoginData : LoginData = { 

    


    Users :[{
        username: 'standard_user',
        password: 'secret_sauce',
        type: 'valid',
        description: 'standard user'
    },{
        username: 'problem_user',
        password: 'secret_sauce',
        type: 'valid',
        description: 'problem user'
    },
    {
        username: 'standard_user',
        password: 'secret',
        type: 'invalid',
        description: 'invalid password'
    },{
        username: 'standard',
        password: 'secret_sauce',
        type: 'invalid',
        description: 'invalid username'
    }],

    Expected: {
        dashboardUrl: 'https://www.saucedemo.com/inventory.html',
        errorMessage: 'Epic sadface: Username and password do not match any user in this service'
    


}

   
}

