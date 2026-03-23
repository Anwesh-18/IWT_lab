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

