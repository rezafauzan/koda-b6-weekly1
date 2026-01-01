async function ambilData(resource){
    try {
        let rawData = await fetch(resource)
        let dataJson = await rawData.json()
        return dataJson
    } catch (e) {
        return console.log(`Error Sir!: ${e}`)
    }
}

let resource = "https://github.com/rezafauzan/koda-b6-weekly1/raw/refs/heads/master/menu.json"

let menu = ambilData(resource)

