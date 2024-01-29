const accountId = 12345;
let accountEmail = "Krupa.patel@gmail.com";
var accoutPassword = "112233";
accountCity = "Ahmedabad";
let accountState;

/*
Prefer not to use var, 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accoutPassword, accountCity, accountState]);