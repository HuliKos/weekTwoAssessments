///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,curr) => acc + curr.price, 0)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
let finalPayment = cartTotal * (1 + tax) - couponValue

 console.log(`Your total is ${finalPayment}`)
}

calcFinalPrice(20,5,.05)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
Phone number: Unique identifier to locate the order owner
    Type: string -- No calculation is needed for this information, easier to use string method for further needs
First and last name: Assisstant information for communicating the order details to the customer
    Type: string -- General purpose information, easier to use string method for further needs
Email address: Where the order confirmation details will be provided
    Type: string -- General purpose information, easier to use string method for further needs
Address: Collected in case the order is being delivered
    Type: string -- General purpose information, easier to use string method for further needs
Credit card info (a package of detailed information, other than exp date): For collecting payment    
    Type: string -- General purpose information, easier to use string method for further needs
Creidt card info (Exp date): For collecting payment
    Type: Date -- Further use for identify the useless credit info
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {
    phoneNumber: '6264171000',
    firstName: 'Lan',
    lastName: 'Kostrikin',
    emailAddress: 'lankostrikin@gmail.com',
    addressNumber: '15810',
    addressStreet: 'Breedlove Pl',
    addressExtNumber: '135',
    addressCity: 'Addison',
    addressState: 'TX',
    addressZip: '75001',
    ccNumber: '1234567891011',
    ccSC: '123'
}

console.log(customer)

