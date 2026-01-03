const keLowercase = require('./lowercaser.js')
function countHasil(kata,array){
    return console.log(`Hasil pencarian menemukan ${array.length} item dari kata pencarian ${kata}`)
}

module.exports = function searchData(kata = '', data = []) {
    const choosen = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].nama.length; j++) {
            let lengthCorect = 0
            if(keLowercase(data[i].nama[j]) === keLowercase(kata[0])){
                for (let k = 0; k < kata.length; k++) {
                    if(keLowercase(data[i].nama[j+k]) === keLowercase(kata[k])){
                        lengthCorect = lengthCorect+1
                    }
                }
                if(lengthCorect === kata.length){
                    choosen[choosen.length] = data[i]
                }
            }
        }
    }
    countHasil(kata, choosen)
    return choosen
}