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

