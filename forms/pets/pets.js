let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withMarmaduke = petNames.push["Marmaduke"]

console.log(petNames)

let removedItems = petNames.splice(5, 1)
console.log(petNames)
//action: Removing Marty.

petNames.unshift("Nancy")
console.log(petNames)
//action: Adding Nancy to front

petNames.push("Nancy")
console.log(petNames)
//action: Adding Nancy to the back

let rileyLocation = petNames.indexOf("Riley")
console.log(rileyLocation)
//action: Showing the user Riley's index

let cindyLocation = petNames.indexOf("Cindy")
console.log(cindyLocation)
//action: Showing the user Cindy's index

console.log(withMarmaduke)
//action: Showing withMarmaduke data

petNames.shift()
console.log(petNames)
//action: Remove first name

petNames.unshift('Barney')
console.log(petNames)
//action: Add Barney to beginning

let allPets = [petNames.push('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed')]

console.log(allPets)
//Remaining Data

let stringPets = ['Bob', 'Sam', 'Andy']

petNames.unshift('Agnes')
//action: Add Agnes to beginning

//finished code