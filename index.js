async function ambilData(resource) {
    try {
        let rawData = await fetch(resource)
        let dataJson = await rawData.json()
        return dataJson
    } catch (e) {
        return console.log(`Error Sir!: ${e}`)
    }
}

let path = "https://github.com/rezafauzan/koda-b6-weekly1/raw/refs/heads/master/menu.json"
let state = 0
ambilData(path).then(
    data => {
        console.log("==== Selamat Datang di Program Interactive Pembelian Makanan ======")
        console.log("=== Menu ======")
        console.log("(1) Lihat list menu makanan")
        console.log("Silahkan pilih menu dengan memasukan angka")
        process.stdin.on("data",
            input => {
                if(state === 0){
                    let pilihan = parseInt(input.toString().trim())
                    if (pilihan === 1) {
                        data.forEach(
                            item => {
                                console.log(`(${item.id}). ${item.nama} ~ ${item.harga}`)
                            }
                        )
                        console.log("(0). Untuk kembali ke halaman utama")
                        state = 1
                    }
                }else if(state === 1){
                    let pilihan = parseInt(input.toString().trim())
                    if (pilihan === 0) {
                        console.log("==== Selamat Datang di Program Interactive Pembelian Makanan ======")
                        console.log("=== Menu ======")
                        console.log("(1) Lihat list menu makanan")
                        console.log("Silahkan pilih menu dengan memasukan angka")
                        state = 0
                    }
                }
            }
        )
    }
)