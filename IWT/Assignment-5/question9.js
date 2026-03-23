//Question-9
function is_armstrong(num){
    let temp = num
    let rev = 0
    while (temp>0){
        digit = temp%10
        rev = rev*10 + digit
        temp = Math.floor(temp/10)
    }
    if(rev===num){
        return true;
    }else{
        return false
    }
}

