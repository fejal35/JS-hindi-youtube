const accountId = 142536
let accountEmail = "abc@gmail.com"
var accountPassword = "123654"
accountCity = "Rajkot"
let accountState

// accountId = 1425 // not allow

accountEmail = "xyz@gmail.com"
accountPassword = "415263"
accountCity = "Ahemdabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])