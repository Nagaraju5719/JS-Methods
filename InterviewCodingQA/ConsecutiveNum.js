// # FINDING MISSING SEQUENCE NUMBERS IN AN ARRAY //


let a=[1,2,3,4,5,6,7,8,11]


function findMissingNum(a){
    for (let i =0; i<a.length - 1; ++i){
        if(a[i] + 1 !== a[i + 1]){
            return a[i] + 1
        }
    }
    return null
}


console.log(findMissingNum(a)) //9