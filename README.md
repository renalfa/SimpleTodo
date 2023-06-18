# My Simple TODO list
My simple todo list merupakan sebuah website untuk mencatat segala aktifitas yang ingin anda lakukan. Anda bisa menambahkan todo, merubah todo, dan juga menghapus todo. Semoga bermanfaat!.

## Detail
Website ini menggunakan google auth sebagai indikasi login. Tentunya akan lebih mudah dan tidak perlu mengimputkan field username atau password.
Data yang ditampilkan juga sesuai dengan data yang anda inputkan sendiri, karena terintegrasi dengan firebase.

## Penjelasan Fitur
1. Login
   menggunakan layanan google auth. User hanya perlu menekan tombol login dan memilih akun yang akan digunakan untuk keperluan login tersebut.
2. Say Hello
   menampilkan display name sesuai akun yang sedang Login.
3. Add todo 
   User bisa menambahkan todo.
4. Change Todo
   User bisa merubah status todo dari procees ke done dan juga sebaliknya.
5. Delete Todo
   User bisa menghapus todo.
6. Get All Todo based on User login
   Menampilkan data todo sesuai user yang login.
   
   
   
# JAWABAN DARI PERTANYAAN
## 1. Apakah Kegunaan JSON pada REST API?
   Jawaban: JSON (JavaScript Object Notation) adalah format yang umum digunakan untuk pertukaran data antara server dan klien dalam pengembangan web,             termasuk dalam implementasi REST API. Ringan dan sederhana sehingga lebih efisien ketika melakukan pertukaran data.
   
## 2. Jelaskan bagaimana REST API bekerja
   ### yang pertama
      REST API mengguanakan metode HTTP (GET, POST, PUT, PATCH, DELETE), ini akan menentukan jenis operasi yang ingin dilakukan terhadap sumber
      (resource) yang diinginkan. Sumber daya ini di identifikasi dengan URL / Endpoint yang dapat di akses dan di manipulasi.
   ### yang kedua
      Klien membuat permintaan HTTP ke server (Request) dengan metode yang sudah di jabarkan di atas. Dalam proses ini bisa menyertakan data berupa
      JSON atau lain nya seperti params dan juga query.
   ### yang ketiga
      Server menerima request dan akan melakukan routing sesuai endpoint yang dituju. Server memproses permintaan yang diterima berdasarkan metode
      HTTP dan data yang dikirimkan. Misalnya, jika permintaan GET diterima, server akan mencari sumber daya yang sesuai dan mengirimkan respons
      dengan data yang diminta ke klien. Respons ini biasanya berisi status HTTP, seperti kode status (misalnya 200 untuk berhasil, 404 untuk tidak
      ditemukan), serta data yang diminta dalam format JSON atau bentuk lainnya.
   ### yang keempat
      Klien menerima respons dari server dan memprosesnya sesuai kebutuhan. Data yang dikirimkan dapat digunakan untuk memperbarui tampilan aplikasi,
      menampilkan pesan kesalahan, atau melakukan tindakan lain yang sesuai. Dan selesai.

## 3. Buatlah sebuah website dengan fungsi dibawah ini:
   ### Login Page (done)
   ### TODO list (done)
   ### FSW dan FE (done)

## 4. Hal - hal yang perlu dipastikan adalah:
   ### Memastikan data yang di tampilkan hanya data yang sesuai/ dimiliki oleh user yang login (done)
   ### Deploy (done)

## 5. Membuat video mengenai aplikasi yang dibuat, berisi penjelasan singkat dan source code. 
   ### (done)
   
# LINK WEBSITE 
   https://mysimple-todo-list.vercel.app/

