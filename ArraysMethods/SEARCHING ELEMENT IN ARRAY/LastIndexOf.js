const names=["Jay","John","Ram","Sesu",'John',"Jay"]

console.log(names.lastIndexOf("John"))
console.log(names.lastIndexOf("Jay"))


const index=names.lastIndexOf("Jay")
names[index]="Jaya"
console.log(names)