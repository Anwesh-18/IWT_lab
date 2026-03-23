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