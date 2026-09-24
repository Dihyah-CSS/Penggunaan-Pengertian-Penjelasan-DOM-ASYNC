// --- BAGIAN DOM (Manipulasi Tampilan) ---
// Misal di file HTML kita memiliki kode ini: <p id="pesan">Teks Asli</p>

const elemen = document.getElementById("pesan"); // FUNGSI: Mencari dan menangkap elemen HTML yang memiliki ID "pesan".
elemen.innerText = "Teks ini telah diubah!";     // FUNGSI: Mengganti isi teks asli pada elemen HTML tersebut dengan teks baru.
elemen.style.color = "blue";                     // FUNGSI: Menambahkan gaya CSS untuk mengubah warna teks menjadi biru.


// --- BAGIAN ASYNC (Mengambil Data Latar Belakang) ---

async function ambilDataUser() {                 // FUNGSI: Mendeklarasikan fungsi agar berjalan secara asinkron (di latar belakang).
  try {                                          // FUNGSI: Memulai blok aman. Jika ada error di sini, web tidak akan crash.
    
    const respons = await fetch('https://jsonplaceholder.typicode.com/users/1'); // FUNGSI: Meminta data dari server luar. 
                                                                                // 'await' membuat JS menunggu hasil unduhan di latar belakang.
     const user = await respons.json();           // FUNGSI: Mengonversi data mentah dari server menjadi format JSON agar mudah dibaca.
    
    console.log("Nama User:", user.name);        // FUNGSI: Mencetak nama user yang berhasil diambil ke console browser.
  } catch (error) {                              // FUNGSI: Menangkap masalah jika terjadi kegagalan (contoh: internet putus).
    console.log("Terjadi kesalahan:", error);    // FUNGSI: Menampilkan pesan peringatan error ke console browser.
  }
}
ambilDataUser();                                 // FUNGSI: Memanggil/menjalankan fungsi pengambil data di atas.
console.log("Teks ini muncul duluan!");          // FUNGSI: Membuktikan sifat non-blocking. Baris ini dieksekusi lebih dulu,
                                                // sementara data server di atas masih dalam proses antrean.