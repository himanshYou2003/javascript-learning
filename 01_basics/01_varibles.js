const accountId = 1661
let accountEmail = "himanshu@gmail.com"
var accountPassword = "2210991661"  /* prefer dont use var coz of issue in block scope and fucntional scope  */
accountCity ="jaipur"
let accountState ;

// accountId = 2  ...//not allow coz [const] cant change
accountEmail = "zany@gmail.com"
accountPassword = "1661"
accountCity = "Delhi"


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity ,accountState])