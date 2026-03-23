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