import Cookies from "js-cookie";

const Auth =() =>{
    if(Cookies.get('type') && Cookies.get('token')){
        return Cookies.get('type');    
    }
    else{
        return false;
    }
    }
export default Auth