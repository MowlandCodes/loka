# LOKA - Platform Promosi Wisata Lokal Indonesia

## 1. Deskripsi Proyek

**LOKA** adalah sebuah aplikasi web _front-end_ statis (_view-only_) yang dirancang sebagai tugas akhir mata kuliah **Interaksi Manusia dan Komputer (IMK)**. Aplikasi ini berfungsi sebagai _Landing Page_ modern untuk mempromosikan destinasi wisata alam tersembunyi (_hidden gems_) di Indonesia.

Dibangun menggunakan teknologi web modern (**React, TypeScript, Vite, dan Tailwind CSS v4**), LOKA menawarkan antarmuka yang responsif, estetis, dan performa tinggi. Proyek ini berfokus pada implementasi desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) tanpa melibatkan pemrosesan _backend_ yang kompleks.

## 2. Topik dan Tujuan

- **Topik:** Website Informasi Wisata Lokal (_Travel & Nature_).
- **Tujuan Utama:**
  1. Menyediakan informasi visual mengenai destinasi wisata, penginapan (_cottages_), dan galeri keindahan alam Indonesia.
  2. Mengimplementasikan prinsip-prinsip desain antarmuka yang ramah pengguna (_user-friendly_) dan aksesibel.
  3. Mendukung audiens global melalui fitur multi-bahasa (Internasionalisasi).

## 3. Target Pengguna

Aplikasi ini dirancang untuk dua segmen pengguna utama:

1. **Wisatawan Domestik (Lokal):** Pengguna yang mencari referensi liburan akhir pekan atau "healing" di dalam negeri dengan akses informasi berbahasa Indonesia.
2. **Turis Mancanegara (Internasional):** Pengunjung asing yang ingin mengeksplorasi keindahan alam Indonesia, didukung dengan antarmuka berbahasa Inggris.

## 4. Prinsip HCI (Human-Computer Interaction) yang Diterapkan

Dalam pengembangan LOKA, diterapkan prinsip-prinsip _Nielsen’s Usability Heuristics_ dan kaidah UX sebagai berikut:

- **Aesthetic and Minimalist Design (Desain Estetis dan Minimalis):**
  Menggunakan _whitespace_ yang cukup, tipografi yang jelas (_Inter font_), dan skema warna alam (_Emerald & Slate_) untuk mengurangi beban kognitif pengguna dan menonjolkan konten visual.

- **Match Between System and the Real World (Kesesuaian Sistem dengan Dunia Nyata):**
  Penggunaan ikon yang familiar (misal: Pin Map untuk lokasi) dan istilah yang umum dimengerti. Fitur **Internasionalisasi (i18n)** memungkinkan pengguna beralih antara Bahasa Indonesia dan Inggris sesuai preferensi bahasa mereka.

- **Consistency and Standards (Konsistensi dan Standar):**
  Elemen navigasi, tombol _Call-to-Action_ (CTA), dan gaya kartu (_card style_) dijaga konsistensinya di seluruh halaman untuk memudahkan pengguna mengenali pola interaksi.

- **Visibility of System Status (Visibilitas Status Sistem):**
  Memberikan umpan balik visual (_visual feedback_) saat pengguna melakukan interaksi, seperti efek _hover_ pada kartu destinasi, animasi transisi pada menu, dan perubahan gaya kursor pada elemen yang dapat diklik.

- **User Control and Freedom (Kontrol dan Kebebasan Pengguna):**
  Navigasi yang bersifat _sticky_ memungkinkan pengguna berpindah antar bagian (_section_) dengan mudah kapan saja tanpa harus menggulir halaman secara manual ke atas.

## 5. Teknologi yang Digunakan

- **Framework:** React (v19)
- **Bahasa:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Runtime:** Bun
- **Library Tambahan:**
  - `react-i18next` (Untuk fitur multi-bahasa)
  - `lucide-react` (Ikonografi)

## 6. Cara Menjalankan Demo

Berikut adalah langkah-langkah untuk menjalankan proyek ini di lingkungan lokal (_localhost_):

### Prasyarat

Pastikan komputer Anda telah terinstal **Bun** (atau Node.js).

### Langkah Instalasi

1. **Clone Repositori** (atau ekstrak file proyek):

   ```bash
   git clone https://github.com/mowlandcodes/loka.git
   cd loka
   ```

2. **Instalasi Dependensi:**
   Jalankan perintah berikut di terminal untuk mengunduh pustaka yang dibutuhkan:

   ```bash
   bun install
   # Atau jika menggunakan npm: npm install
   ```

3. **Menjalankan Mode Pengembangan:**
   Untuk melihat demo aplikasi:

   ```bash
   bun run dev
   # Atau jika menggunakan npm: npm run dev
   ```

4. **Akses Browser:**
   Buka browser dan kunjungi alamat yang tertera di terminal (biasanya `http://localhost:5173`).

---

_Dibuat oleh [M. Faridh Maulana/452024611065, Suryatama Widyadhana/452024611061, Muhammad Wildan/452024611014] - Program Studi Teknik Informatika, Universitas Darussalam Gontor._
