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

