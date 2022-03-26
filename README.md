# Backend Website Pendaftaran KoLU

Backend ini hanya digunakan untuk mengirim email konfirmasi pendaftaran ke member yang baru daftar. 

Untuk bagian frontend dapat dilihat di [Frontend-Web-Pendaftaran-KoLU](https://github.com/KomunitasLinuxUPN/Website-Pendaftaran-KoLU.git).

---

## Untuk Para Kontributor dan _Maintainer_

- Dianjurkan untuk memasang ekstensi ESLint untuk pengguna VSCode, karena proyek ini menggunakan ESLint untuk menjaga kualitas dan konsistensi kode.
- Dimohon untuk tidak melakukan _commit_ langsung ke _branch main_. Dimohon untuk membuat _branch_ baru untuk setiap pekerjaan anda, lalu _push_ branch tersebut ke _repository_ ini dan lakukan _pull request_ ke _branch main_.

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

## Catatan Konfigurasi Gmail Mailer

- Turtorial Konfigurasi APInya:
  https://www.youtube.com/watch?v=JJ44WA_eV8E
- Jangan lupa cek komentarnya *Nikolai Stakheiko* biar bisa jalan
- Boleh cek ini buat menuju ke URL console API-nya:
  https://developers.google.com/gmail/api/quickstart/js

---

> Sebagian isi README mengutip dari README [web-pendaftaran-seed](https://github.com/pps-ti/web-pendaftaran-seed) milik Lab PPS-TI UPN "Veteran" Jawa Timur
