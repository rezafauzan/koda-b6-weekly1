const fs = require('fs')

module.exports = function buatFile(namaFile, isi){
	try {
		let tanggal = Date.now()
		fs.writeFileSync(`./assets/data/invoices/${namaFile}-${tanggal}.txt`, isi)
	} catch (error) {
		console.log(error)
	}
}