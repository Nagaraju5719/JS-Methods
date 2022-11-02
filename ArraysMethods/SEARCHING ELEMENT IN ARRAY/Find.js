


// 1 
const names=["raj","Ram","deepti","Aarthi","Nag"]

const res=names.find(findRam)

function findRam(item){
    return item === "Ram"
}

console.log(res)


// 2
const nameArr=[
    {
        name:"Raj",
        age:30
    },
    {
        name:"Shesu",
        age:20
    },
    {
        name:"Alpha",
        age:34
    },
    {
        name:"Kokila",
        age:54
    },
]

const res2=nameArr.find(findAlpha)

function findAlpha(item){
    return item.name == "Alpha"
}

console.log(res2.age)