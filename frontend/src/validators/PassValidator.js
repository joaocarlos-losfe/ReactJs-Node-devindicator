export function ValidPassword(pass) 
{ 
    var passw = /^[A-Za-z]\w{4,14}$/;

    if(passw.test(pass)) 
        return true;
    else
        return false;
    
}