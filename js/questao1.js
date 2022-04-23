
let init = 18907;
let end = 33306;
let beautiful = 0;

for(init; init <= end; init++){
    let  verification = init.toString()
    let array = verification.split("")
    if(array.includes('8') && !array.includes('3')){
        beautiful++
    }
}

console.log("existem "+beautiful+" numeros bonitos!");