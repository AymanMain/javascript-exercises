const fibonacci = function(numS) {
    let num=parseInt(numS);
    if(num<0){return "OOPS";}
    else if(num==0){return 0;}
    else if(num==1){return 1;};
    
    let fibo=0;
    let n_2=0;
    let n_1=1;

        for(let i=2;i<=num;i++){
            fibo=n_2+n_1;
            n_2=n_1;
            n_1=fibo;
        };
    return fibo;
};
/* 
num-2=
num-1=
fibo=num-2 + num-1*/
// Do not edit below this line
module.exports = fibonacci;
