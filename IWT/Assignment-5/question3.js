// Question-3
let num = 121
let temp = num
let rev = 0
while(temp>0){
    digit = temp%10
    temp = Math.floor(temp/10)
    rev = rev*10 + digit
}
console.log(rev)
if (rev===num){
    console.log('Pallindrome')
}else{
    console.log('Not a pallindrome')
}

