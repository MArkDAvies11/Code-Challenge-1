let distanceinKm=prompt("Unafika wapi Mkubwa? Kilometer ngapi?")
const basefare=50
const chargePerKm=15
function calculateBodaFare(){
  distanceinKm=parseFloat(distanceinKm)
}

const distancecharge=distanceinKm*chargePerKm
const totalFare=basefare+(distanceinKm*chargePerKm)

console.log(`Uko kwote? Io ni ${distanceinKm}km`)
console.log(`Ukikalia pikipiki:KES${basefare}`)
console.log(`Total KES ${totalFare}`)
console.log("Panda Pikipiki")