export const checkUsername=(username)=>{
    if(username=='')
    {
        return "Username do not empty!"
    }else{
        return ""
    }
}

export const checkPassword=(password)=>{
    if(password=='')
        {
            return "Password do not empty!"
        }
        else if(password.length<6){
            return "Password must be grater then 6 char!"
        }
        else{
            return ""
        }
}