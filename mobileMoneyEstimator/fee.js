let amountToSend=prompt("Unatuma Ngapi?(KES)")
const FEE_PERCENTAGE=0.015
const Minfee=10;
const Maxfee=70;
function estimateTransactionFee(){
amountToSend=parseFloat(amountToSend)

}

estimateTransactionFee()

let calculatedfee= amountToSend*FEE_PERCENTAGE

if(calculatedfee<Minfee){calculatedfee=Minfee}
if(calculatedfee>Maxfee){calculatedfee=Maxfee}

const totalAmountDebited=amountToSend+ calculatedfee;

console.log(`Sending KES${amountToSend}`)
console.log(`Calculated Transaction Fee:KES${calculatedfee}`)
console.log(`Total amount to debited:KES${totalAmountDebited}`)
console.log("Send Money Securely!")
