

interface Users{
    username:string
    password:string
    type: 'valid' | 'invalid'
    description:string
}



interface Expected{

    dashboardUrl:string
}

interface LoginDataType{

    users: Users[]
    expected : Expected
}


 export const LoginData: LoginDataType = {
    users : [{
    username:"standard_user",
    password:"secret_sauce",
    type: "valid",
    description:"Successful login with Valid User"
},{
    username:"standard",
    password:"secret_sauce",
    type: "invalid",
    description:"Username is Invalid"
},{
    
    username:"problem_user",
    password:"secret_sauce",
    type: "valid",
    description:"Successful login with Valid User"

},{
    username:"ocked_out_user",
    password:"secret",
    type: "invalid",
    description:"Password is Invalid"
}],
    expected: {
        dashboardUrl: 'https://www.saucedemo.com/inventory.html'
    }
 }


 