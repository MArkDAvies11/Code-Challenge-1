let numberOfCups=prompt("How many cups of Chai Bora would you like to make")
function calculateChaiIngredients(){
numberOfCups=parseInt(numberOfCups)

}
calculateChaiIngredients()

const waterinacup= 200
const milkinacup=50
const tealeavesinacup=1
const sugarinacup=2

const totalwater=numberOfCups*waterinacup
const totalmilk=numberOfCups*milkinacup
const totaltealeaves=numberOfCups*tealeavesinacup
const totalsugar=numberOfCups*sugarinacup

console.log(`To make ${numberOfCups}cups of Kenyan Chai ,you will need`)
console.log(`Water:${totalwater}ml`)
console.log(`Milk:${totalmilk}ml`)
console.log(`Tea Leaves(Majani):${totaltealeaves}tablespoon`)
console.log(`Sugar(Sukari):${totalsugar}teaspoon`)
console.log("Enjoy your Chai Bora")