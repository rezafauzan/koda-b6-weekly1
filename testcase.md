# Test Case Program Interactive Point Of Sales Restoran

<!-- halaman utama -->
1. Tampil Menu utama di Awal Ketika Dijalankan (Aman)

<!-- halaman list makanan (Aman) -->
1. Tampil List Makanan jika diinputkan "1" di halaman utama Ketika Dijalankan (Aman)
2. Di menu list makanan jika diinputkan angka dari 1~data.length makan akan masuk ke detail makanan dan ada pilihan untuk tambah ke keranjang dan 0 untuk kembali ke menu utama 
3. Di menu list makanan jika input berupa string maka akan menampilkan list makanan yang mengandung string tersebut (Aman)
4. Di detail makanan jika diinputkan "+" maka akan menambahkan makanan tersebut ke keranjang jika diinput 0 kembali ke list makanan (Aman)

<!-- Halaman Keranjang (Aman)-->
1. Di halaman keranjang menampilkan list item yang ditambahkan jika keranjang kosong tampilkan keranjang kosong (Aman)
2. Jika diinputkan string "-" akan membuka menu untuk menghapus item dari keranjang jika 0 maka akan kembali ke halaman utama jika keranjang kosong kembali ke halaman utama(Aman)

<!-- Halaman Checkout (Aman)-->
1. jika keranjang kosong tampilkan "Keranjang kosong" (Aman)
2. di halaman keranjang jika diinput angka 1 akan mencetak invoice(jika keranjang kosong kembali ke halaman utama) jika 0 kembali ke halaman utama (Aman)

<!-- Halaman History-->
1. jika belum ada invoice tampilkan "Belum ada invoice" kemudian kembali ke menu utama (Aman)
2. jika ada invoice tampilkan invoice invoice semuanya (Aman)
3. jika di halaman history di tekan 1 maka akan dibuatkan file di assets/data/invoices/invoice-id-timestamp (Aman)

<!-- Issue -->
1. Input Kosong membuat program keluar