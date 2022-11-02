


// 1

const numbers=[1,2,3,4,5,6,7]

const even=numbers.filter((value)=>{
    return value % 2 === 0
})
console.log(even)
console.log(numbers)

// 2
const persons=[
    {
        name : "Flora",
        age:30
    },
    {
        name: "aarthi",
        age:28
    },
    {
        name : "Ahaini",
        age:23
    },
    {
        name: "Karthi",
        age:45
    },
]

const filtering=persons.filter(person=>person.age >= 30 )
console.log(filtering)


// 3
const numbers4=[1,2,3,1,4,2,5,3,6,7,5,4,8,9]

const unique=numbers4.filter((value,index,arr)=>arr.indexOf(value) === index)
console.log(unique)