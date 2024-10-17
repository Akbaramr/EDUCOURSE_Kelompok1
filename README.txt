Persiapan:
1. Buat folder direktori pada komputer, nama direktori komputer dan repositori github harus sama.

2. Buka folder direktori menggunakan VSCode

3. download git, git harus berjalan setiap kali mengakses terminal di VSCode

4. Akses Terminal > New terminal. Didalam terminal pilih Git Bash.

5. Pertama-tama input username dan email:
git config --global user.name "username github"
git config --global user.email "nama@example.com"


untuk mengeceknya gunakan perintah:
git config user.email
git config user.name

4. Masukkan perintah git clone hanya untuk pertama kali agar file pada repositori dapat didownload dan dimodifikasi dengan VSCode.

5. Perintah pull, gunakan setiap ingin melakukan push untuk mengantisipasi error jika anggota tim lain sudah melakukan push sebelum kamu. Pull biasa digunakan untuk mendapatkan perubahan code terbaru yang dilakukan teman kita.

6. Git status, bisa melihat perubahan apa yang telah kita lakukan, jika sudah sesuai lanjut ke perintah commit.


Perintah Clone Repository
git clone https://github.com/Akbaramr/EDUCOURSE_Kelompok1.git

Ubah branch dari Master ke Main:
git branch -m master main

Cara Push:
git add .
git commit -m "Perubahan yang dilakukan"
git remote add origin https://github.com/Akbaramr/EDUCOURSE_Kelompok1.git
Ubah Branch menjadi main
git pull origin main
git push origin main