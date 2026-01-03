const searcher = require('./my_modules/Day7/search')

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
let choice
let cart = []

// state 0 menu utama
// state 0 pilihan 1 list makanan
// state 0 pilihan 1 list makanan
// state 1 pilihan 0 kembali ke menu utama
// state 1 input string -> mencari makanan
// state 1 input di range menu -> detail makanan 
// state 2 detail makanan
// state 2 pilihan 1 -> tambahkan ke keranjang

ambilData(path).then(
    data => {
        console.log("==== Selamat Datang di Program Interactive Pembelian Makanan ======")
        console.log("=== Menu ======")
        console.log("(1) Lihat list menu makanan")
        console.log("Silahkan pilih menu dengan memasukan angka")
        process.stdin.on("data",
            input => {
                if (state === 0) {
                    let pilihan = parseInt(input.toString().trim())
                    if (pilihan === 1) {
                        data.forEach(
                            item => {
                                console.log(`(${item.id}). ${item.nama} ~ Rp.${item.harga},-`)
                            }
                        )
                        console.log("()Masukan kata untuk mencari menu")
                        console.log("(0). Untuk kembali ke halaman utama")
                        state = 1
                    }
                }
                else if (state === 1) {
                    let pilihan = input.toString().trim()
                    if (!isNaN(pilihan)) {
                        pilihan = parseInt(pilihan)
                        if (pilihan === 0) {
                            console.log("==== Selamat Datang di Program Interactive Pembelian Makanan ======")
                            console.log("=== Menu ======")
                            console.log("(1) Lihat list menu makanan")
                            console.log("Silahkan pilih menu dengan memasukan angka")
                            state = 0
                        } else {
                            console.log(`Nama Makanan :${data[parseInt(pilihan) - 1].nama} `)
                            console.log(`Harga per sajian :${data[parseInt(pilihan) - 1].harga} `)
                            console.log("(+). Untuk menambahkan ke keranjang")
                            console.log("(0). Untuk kembali ke list makanan")
                            choice = data[parseInt(pilihan) - 1]
                            state = 2
                        }
                    } else {
                        pilihan = input.toString().trim()
                        let filtered = searcher(pilihan, data)
                        filtered.forEach(
                            item => {
                                console.log(`(${item.id}). ${item.nama} ~ Rp.${item.harga},-`)
                            }
                        )
                        state = 1
                    }
                }
                else if (state === 2) {
                    let pilihan = input.toString().trim()
                    if (!isNaN(pilihan)) {
                        pilihan = parseInt(pilihan)
                        if (pilihan === 0) {
                            console.log(pilihan)
                            data.forEach(
                                item => {
                                    console.log(`(${item.id}). ${item.nama} ~ Rp.${item.harga},-`)
                                }
                            )
                            console.log("()Masukan kata untuk mencari menu")
                            console.log("(0). Untuk kembali ke halaman utama")
                            state = 1
                            // console.log("ke state 1")
                        }
                    } else {
                        if(pilihan === "+"){
                            // console.log(pilihan)
                            // console.log(choice)
                            cart.push(choice)
                            console.log("Menu ini dimasukan ke keranjang")
                        }
                    }
                }
                else if (state === 9) {
                    let pilihan = parseInt(input.toString().trim())
                    if (pilihan === 0) {
                        console.log("State 9")
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
