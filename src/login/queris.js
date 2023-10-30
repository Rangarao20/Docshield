const getuserdetails = 'SELECT * FROM "LOGIN"';
// const getusername = 'SELECT  * FROM public."LOGIN" WHERE "Username" =  $1 OR "Mobile" =$1';
const getusername = 'SELECT * FROM Login WHERE Username = $1 OR Mobile = $1';
const checkusr = 'SELECT  "Password" FROM public."LOGIN" WHERE "Username" =  $1' ;
module.exports = {
    getuserdetails,
    getusername,
    checkusr,
}
