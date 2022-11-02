

//1
 const str="1234567"
//  const res=Array.from(str,x=>Number(x))  // number format

//  const res=Array.from(str,Number)

//  const res=Array.from(str)   //string format


const res=Array.from(str,mapFn)

function mapFn(item){
    return Number(item)
}


 console.log(res)



 // 2

 const num=[1,2,3,4,3,5,6,7,4,3,5,6,4,2,1,7,8,9,0,3,7,6,9]

 
 // const unique=new Set(num)

 const unique=Array.from(new Set(num))

 console.log(unique)