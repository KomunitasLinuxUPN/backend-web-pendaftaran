# Backend Website Pendaftaran KoLU

Backend ini hanya digunakan untuk mengirim email konfirmasi pendaftaran ke member yang baru daftar. 

Untuk menggunakan GMAIL API silahkan lihat sebuah catatan di file [CATATAN_GMAIL_MAILER.md](./CATATAN_GMAIL_MAILER.md)

Untuk bagian frontend dapat dilihat di [Frontend-Web-Pendaftaran-KoLU](https://github.com/KomunitasLinuxUPN/Website-Pendaftaran-KoLU.git)

---

## Untuk Para Kontributor dan _Maintainer_

#### Tentang Ekstensi

- Dimohon untuk memasang Prettier di _text editor_ masing-masing. Untuk pengguna VSCode silakan memasang ekstensi Prettier yang tersedia di _marketplace_, lalu aktifkan opsi _"format on save"_ pada _setting_ VSCode anda.

- Juga dianjurkan untuk memasang ekstensi ESLint untuk pengguna VSCode, karena proyek ini memiliki _hook pre-commit_ yang menjalankan ESLint untuk menjaga kualitas dan konsistensi kode.

#### Tentang _commit_

- Dimohon untuk tidak melakukan _commit_ langsung ke _branch master_. Dimohon untuk membuat _branch_ baru untuk setiap pekerjaan anda, lalu _push_ branch tersebut ke _repository_ ini dan lakukan _pull request_ ke _branch master_.

---

## Panduan _Setup_ Lokal

```bash
# Isikan kredensial GMAIL API anda ke dalam file .env
# Silahkan buat file tersebut berdasarkan file .example.env

# Install Dependencies
$ npm install

# Jalankan server di mode development dengan menggunakan nodemon
$ npm run dev

# Jalankan server di mode production dengan menggunakan perintah node
$ npm start
```

---

> Sebagian isi README mengutip dari README [web-pendaftaran-seed](https://github.com/pps-ti/web-pendaftaran-seed) milik Lab PPS-TI UPN "Veteran" Jawa Timur