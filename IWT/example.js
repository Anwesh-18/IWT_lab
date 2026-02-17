//Question-1
let marks = 90;

if (marks >=90){
	console.log("Grade : A");
}else if(marks >= 75){
	console.log("Grade : B");
}else if(marks >= 50){
	console.log("Grade : C");
}else{
	console.log("Fail!!");
}

//Question-2
let num = 6
let fact = 1
for(let i=2;i<=6;i++){
    fact *= i
}
console.log(fact)

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

// Question-4
let arr = [25,54,98,72,12,69]
let sum = 0
let avg = 0
let largest = arr[0]
let smallest = arr[0]

for(let i=0;i<arr.length;i++){
    sum += arr[i]
    if (arr[i] < smallest){
        smallest = arr[i]
    }
    if (arr[i] > largest){
        largest = arr[i]
    }
}

console.log('sum:'+sum)
console.log('avg:'+(sum/(arr.length)))
console.log('largest:'+largest)
console.log('smallest:'+smallest)

//Question-5
let arr = [25,54,98,72,12,69]
let largest = arr[0]
let s_l = -1

for(let i=0;i<arr.length;i++){
    if (arr[i] > largest){
        largest = arr[i]
    }
}
for(let i=0;i<arr.length;i++){
    if (s_l < arr[i] && arr[i] < largest){
        s_l = arr[i]
    }
}
console.log('second largest:'+s_l)

//Question-6
let arr = [1,2,3,3,4,4,4,5,6,10]
let res = []
for(let i=0;i<arr.length;i++){
    let is_present = false;
    for(let j=0;j<res.length;j++){
        if(res[j]==arr[i]){
            is_present = true;
        }
    }
    if(!is_present){
        res.push(arr[i])
    }
}
console.log(res)

//Question-7
let arr = [1,2,3,3,4,4,4,5,6,10]
let res = {}
for(let i=0;i<arr.length;i++){
    if (res[arr[i]]){
        res[arr[i]] += 1
    }else{
        res[arr[i]] = 1
    }
}
console.log(res)

//Question-8
function is_prime(num){
    for(let i=2;i<num;i++){
        if (num%i==0){
            return false
        }
    }
    return true
}
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

//Question-10
function even_odd(arr){
    let even = []
    let odd = []
    
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    return [even,odd];
}

//Question-11
function reverse_arr(arr){
    n = arr.length
    for(let i=0;i<Math.floor(n/2);i++){
        let temp = arr[i];
        arr[i] = arr[n-i-1]
        arr[n-i-1] = temp
    }
    return arr
}

//Queestion-12
function fibo(n){
    a = 0
    b = 1
    if (n===1){
        return 0;
    }else if (n==2){
        return [0,1]
    }else{
        res = [0,1]
        for(let i=3;i<n;i++){
            c = a+b;
            res.push(c);
            a = b
            b = c;
        }
        return res
    }
}