console.log('5'*5)
const giveType =typeof 5.9
console.log(giveType)

const adder =   5 +false
console.log(adder)


const loginDetails = [

    {
        id : 11 

    }
]

const loginId = loginDetails[0]

if(loginId){
    console.log('allow user to login')
}
else  {
    console.log('Auth failed')
}
