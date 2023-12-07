# Layanan Pendataan Pemesanan Jasa Pengangkutan Sampah dan Produk Daur Ulang

## Deskripsi Layanan
Layanan ini merupakan sebuah microservice yang bertujuan untuk melakukan pendataan pemesanan jasa pengangkutan sampah. Setiap kali pelanggan melakukan pemesanan, data akan dicatat dalam tabel pemesanan, dan informasi pelanggan akan disimpan dalam tabel pelanggan. Satu pelanggan dapat melakukan beberapa pemesanan, dan hubungan antara pelanggan dan pemesanan dijelaskan melalui kunci asing (foreign key). Selain itu, layanan ini juga akan terintegrasi dengan layanan eksternal, menyediakan fitur tambahan untuk pendataan produk daur ulang hasil pengelolaan sampah. Oleh karena itu, layanan ini memiliki dua tabel utama: tabel pelanggan dan tabel pemesanan. Selain itu, dengan tambahan fitur baru, layanan ini juga mencatat data produk daur ulang dalam tabel produk.

### Tabel dalam Database
#### Tabel Pelanggan
| Kolom      | Tipe Data | Deskripsi                  |
|------------|-----------|----------------------------|
| id         | Integer   | Primary Key                |
| nama       | String    | Nama pelanggan             |
| alamat     | String    | Alamat pelanggan           |
| telepon    | String    | Nomor telepon pelanggan    |

#### Tabel Pemesanan
| Kolom           | Tipe Data | Deskripsi                                   |
|-----------------|-----------|---------------------------------------------|
| id              | Integer   | Primary Key                                 |
| deskripsi_sampah| String    | Deskripsi sampah yang akan diangkut         |
| status          | String    | Status pemesanan (contoh: 'Pending', 'Selesai')|
| pelanggan_id    | Integer   | Foreign Key ke tabel pelanggan (id pelanggan)|

#### Tabel Produk
| Kolom     | Tipe Data | Deskripsi           |
|-----------|-----------|---------------------|
| id        | Integer   | Primary Key         |
| nama      | String    | Nama produk daur ulang|
| deskripsi | String    | Deskripsi produk    |
| harga     | Float     | Harga produk        |

#### Tabel Users
| Kolom     | Tipe Data | Deskripsi           |
|-----------|-----------|---------------------|
| id        | Integer   | Primary Key         |
| username  | String    | Nama akun pengguna  |
| email     | String    | Email pengguna      |
| password  | String    | Password Pengguna   |

## Backend dan Frontend
- **Backend**: Menggunakan FastAPI untuk menyediakan layanan API.
- **Frontend**: Menggunakan React untuk membuat antarmuka pengguna yang interaktif.

## Tampilan Website
Website ini memiliki beberapa halaman utama, termasuk:
- **Login**: Halaman untuk login ke sistem.
- **Register**: Halaman untuk mendaftar sebagai pengguna baru.
- **Pendataan Pelanggan**: Halaman untuk melihat, menyunting, menambahkan, dan menghapus data pelanggan.
- **Pendataan Pemesanan Jasa**: Halaman untuk melihat, menyunting, menambahkan, dan menghapus pemesanan jasa pengangkutan sampah.
- **Pendataan Produk**: Halaman untuk melihat, menyunting, menambahkan, dan menghapus produk daur ulang.

## Link dan Informasi Tambahan
- **Swagger Dokumentasi Layanan Ini**: [FAST API SWAGGER - Recyco (MAIN)](https://python123-scxaic-production.up.railway.app/docs)
- **Link Website yang Telah Dideploy**: [RECYCO WEBSITE](https://react-asc2das.vercel.app/)
- **Link Swagger Teman**: [FAST API SWAGGER - Woman Clothing (TEMAN)](https://python-12312sd-production.up.railway.app/docs)
- **Informasi Integrasi dengan Teman**: Terintegrasi dengan layanan teman Priscilla Auleader Napitupulu (18221098).
