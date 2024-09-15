const removeFromArray = function() {
    let args=Array.from(arguments);
    let array=args[0];
    let elements=args.toSpliced(0,1);
    const size=array.length;

    for(let j=0;j<elements.length;j++){
        for (let i=0;i<size;++i){
            if(array[i]===(elements[j])){
                while(array[i]===(elements[j])){
                    array.splice(i,1);
                };
            };   
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
