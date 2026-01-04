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

let path = "https://raw.githubusercontent.com/rezafauzan/koda-b6-weekly1/refs/heads/master/assets/data/menu.json"
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
// state 2 pilihan + -> tambahkan ke keranjang
// state 3 lihat keranjang
// state 4 hapus item di keranjang

const header =
    `===================================================================
====                      Menu                               ======
===================================================================`
const home =
    `===================================================================
==== Selamat Datang di Program Interactive Pembelian Makanan ======
${header}
==== (1) Lihat list menu makanan                             ======
==== (2) Lihat keranjang                                     ======
===================================================================
====         Silahkan pilih menu dengan memasukan angka      ======
===================================================================
Input: `

const menu =
    `===================================================================
==== (n).       Masukan angka untuk memilih makanan          ======
==== ('kata').  Masukan kata untuk mencari menu              ======
==== (0).       Untuk kembali ke halaman utama               ======
===================================================================
Input: `

const search =
    `===================================================================
==== (n).       Masukan angka untuk memilih makanan          ======
==== (0).       Untuk kembali ke halaman utama               ======
===================================================================
Input: `

const food =
    `===================================================================
==== (+). Untuk menambahkan ke keranjang                     ======
==== (0). Untuk kembali ke list makanan                      ======
===================================================================
Input: `

const addedToCart =
    `===================================================================
==== Menu ini dimasukan ke keranjang                         ======
===================================================================
Isi keranjang saat ini : `

const cartUI =
    `===================================================================
==== (-). Untuk mengurangi item dari keranjang               ======
==== (0). Untuk kembali ke halaman utama                     ======
===================================================================
Input: `

const removeCartUI =
    `===================================================================
==== (n). Masukan urutan ke berapa yang ingin dihapus        ======
==== (0). Untuk kembali ke halaman utama                     ======
===================================================================
Input: `

// console.log(home)
ambilData(path).then(
    data => {
        console.log(home)
        process.stdin.on("data",
            input => {
                if (state === 0) {
                    let pilihan = parseInt(input.toString().trim())
                    if (pilihan === 1) {
                        console.log(header)
                        data.forEach(
                            item => {
                                console.log(`==== (${item.id}). ${item.nama} ~ Rp.${item.harga},-`)
                            }
                        )
                        console.log(menu)
                        state = 1
                    }
                    else if (pilihan === 2) {
                        if (cart.length < 1) {
                            console.log("Keranjang mu masih kosong!")
                            console.log(cartUI)
                        } else {
                            console.log(`===================================================================\n====                       Keranjang                         ======\n\n===================================================================\nIsi keranjang saat ini : `)
                            cart.forEach(
                                (item, i) => {
                                    console.log(`${i+1}.Nama Menu : ${item.nama} Harga : ${item.harga}`)
                                }
                            )
                            console.log(cartUI)
                        }
                        state = 3
                    }
                }
                else if (state === 1) {
                    let pilihan = input.toString().trim()
                    if (!isNaN(pilihan)) {
                        pilihan = parseInt(pilihan)
                        if (pilihan === 0) {
                            console.log(home)
                            state = 0
                        } else {
                            console.log("===================================================================")
                            console.log(`==== Nama Makanan :${data[parseInt(pilihan) - 1].nama}`)
                            console.log(`==== Harga per sajian :${data[parseInt(pilihan) - 1].harga}`)
                            console.log(food)
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
                        console.log(search)
                        state = 1
                    }
                }
                else if (state === 2) {
                    let pilihan = input.toString().trim()
                    if (!isNaN(pilihan)) {
                        pilihan = parseInt(pilihan)
                        if (pilihan === 0) {
                            // console.log(pilihan)
                            console.log(header)
                            data.forEach(
                                item => {
                                    console.log(`==== (${(item.id)}). ${item.nama} ~ Rp.${item.harga},-`)
                                }
                            )
                            console.log(menu)
                            state = 1
                            // console.log("ke state 1")
                        }
                    } else {
                        if (pilihan === "+") {
                            // console.log(pilihan)
                            // console.log(choice)
                            cart.push(choice)
                            console.log(addedToCart)
                            cart.forEach(
                                (item, i) => {
                                    console.log(`${i+1}.Nama Menu : ${item.nama} Harga : ${item.harga}`)
                                }
                            )
                            let countdown = 4
                            console.log('')
                            let counterdown = setInterval(
                                () => {
                                    console.log(`Kembali ke list menu dalam ${countdown}detik`)
                                    countdown--
                                }, 1000
                            )
                            setTimeout(() => {
                                console.log(header)
                                data.forEach(
                                    item => {
                                        console.log(`==== (${(item.id)}). ${item.nama} ~ Rp.${item.harga},-`)
                                    }
                                )
                                console.log(menu)
                                clearInterval(counterdown)
                                state = 1
                            }, countdown * 1000)
                        }
                    }
                }
                else if (state === 3) {
                    let pilihan = input.toString().trim()
                    if (!isNaN(pilihan)) {
                        pilihan = parseInt(pilihan)
                        if (pilihan === 0) {
                            console.log(home)
                            state = 0
                        }
                    } else {
                        if (pilihan === "-") {
                            if (cart.length < 1) {
                                console.log("===================================================================")
                                console.log("==== Keranjang mu masih kosong!                              ======")
                                console.log("===================================================================")
                                let countdown = 4
                                console.log('')
                                let counterdown = setInterval(
                                    () => {
                                        console.log(`Kembali ke list menu dalam ${countdown}detik`)
                                        countdown--
                                    }, 1000
                                )
                                setTimeout(() => {
                                    console.log(home)
                                    clearInterval(counterdown)
                                    state = 0
                                }, countdown * 1000)
                            } else {
                                cart.forEach(
                                    (item, i) => {
                                        console.log(`${i + 1}.Nama Menu : ${item.nama} Harga : ${item.harga}`)
                                    }
                                )
                                console.log(removeCartUI)
                                state = 4
                            }
                        }
                    }
                }
                else if (state === 4) {
                    let pilihan = parseInt(input.toString().trim())
                    console.log(`\nMenghapus ${data[pilihan].nama} dari keranjang\n`)
                    cart.splice(pilihan - 1, 1)
                    if (cart.length < 1) {
                        console.log(`===================================================================`)
                        console.log("====                 Keranjang mu masih kosong!              ======")
                        console.log(`===================================================================`)
                        console.log(cartUI)
                        state = 3
                    } else {
                        console.log(`===================================================================\n====                       Keranjang                         ======\n\n===================================================================\nIsi keranjang saat ini : `)
                        cart.forEach(
                            (item, i) => {
                                console.log(`${i+1}.Nama Menu : ${item.nama} Harga : ${item.harga}`)
                            }
                        )
                        console.log(cartUI)
                    }
                    state = 3
                }
                else if (state === 9) {
                    let pilihan = parseInt(input.toString().trim())
                    if (pilihan === 0) {
                        // console.log("State 9")
                        console.log(home)
                        state = 0
                    }
                }
            }
        )
    }
)
