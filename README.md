# Penggunaan-Pengertian-Penjelasan-DOM-ASYNC

1. <h1>DOM (Document Object Model)</h1><br>
<h2>Pengertian:</h2><br>
DOM adalah antarmuka (API) pemrograman yang merepresentasikan dokumen HTML sebagai struktur pohon (tree) yang berisi objek.

<h2>Penjelasan:</h2><br>
Saat browser memuat halaman web, ia mengubah kode HTML menjadi DOM. DOM inilah yang menjembatani HTML dan JavaScript. Dengan DOM, JavaScript dapat secara dinamis membaca, mengubah, menambah, atau menghapus elemen dan desain (CSS) pada halaman web tanpa perlu memuat ulang (reload) halaman tersebut.<br>

2. <h1>ASYNC (Asynchronous)</h1><br>
<h2>Pengertian:</h2><br>
Asynchronous adalah konsep pemrograman di mana suatu proses dieksekusi di latar belakang tanpa memblokir atau menghentikan eksekusi baris kode lainnya (non-blocking).

<h2>Penjelasan:</h2><br>
Secara bawaan, JavaScript membaca kode dari atas ke bawah (berurutan/sinkron). Jika ada proses yang memakan waktu lama (seperti mengunduh gambar atau mengambil data dari server), halaman web bisa "macet" menunggu proses itu selesai.

Dengan async, kita bisa menyuruh JavaScript: "Mulai ambil data ini, tapi sementara menunggunya selesai, lanjutkan saja menjalankan sisa kode yang lain." Pada JavaScript modern, hal ini sering ditulis menggunakan kata kunci async dan await.