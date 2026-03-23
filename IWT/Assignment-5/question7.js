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
