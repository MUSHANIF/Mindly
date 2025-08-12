# Mindly - Platform Kesehatan Mental

Website edukasi kesehatan mental yang modern dan interaktif, dibangun dengan React, Vite, dan Tailwind CSS.

## 🚀 Fitur Utama

- **Hero Section** dengan animasi gradient yang menarik
- **Navbar Responsif** dengan smooth scroll navigation
- **Section Alasan** - Mengapa kesehatan mental penting
- **Section Gejala & Jenis** - Informasi gangguan mental dengan accordion interaktif
- **Section Pengaruh Bullying** - Dampak bullying pada kesehatan mental
- **Section Dampak** - Konsekuensi dan jalan pemulihan
- **Quotes Motivasi** - Carousel kutipan inspiratif
- **Footer** dengan newsletter subscription
- **Animasi & Efek Visual** menggunakan Framer Motion dan AOS
- **Fully Responsive** untuk semua ukuran layar

## 📋 Prasyarat

Pastikan Anda telah menginstall:

- Node.js (versi 14 atau lebih baru)
- npm atau yarn

## 🛠️ Instalasi & Menjalankan Aplikasi

### 1. Clone Repository

```bash
# Jika Anda ingin clone dari GitHub (setelah upload)
git clone https://github.com/yourusername/Mindly -react.git
cd Mindly -react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### 4. Build untuk Production

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist/`

### 5. Preview Production Build

```bash
npm run preview
```

## 🎨 Teknologi yang Digunakan

- **React** - Library JavaScript untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Library animasi untuk React
- **React Icons** - Koleksi icon untuk React
- **React Scroll** - Smooth scrolling navigation
- **AOS** - Animate on scroll library

## 📁 Struktur Folder

```
Mindly -react/
├── src/
│   ├── components/        # Komponen React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Alasan.jsx
│   │   ├── Gejala.jsx
│   │   ├── Pengaruh.jsx
│   │   ├── Dampak.jsx
│   │   ├── Quotes.jsx
│   │   └── Footer.jsx
│   ├── data/             # Data konten website
│   │   └── content.js
│   ├── App.jsx           # Komponen utama
│   ├── main.jsx          # Entry point
│   └── index.css         # Styles global dengan Tailwind
├── public/               # Asset publik
├── index.html           # HTML template
├── tailwind.config.js   # Konfigurasi Tailwind
├── postcss.config.js    # Konfigurasi PostCSS
├── vite.config.js       # Konfigurasi Vite
└── package.json         # Dependencies dan scripts
```

## 🎯 Fitur Tambahan yang Bisa Dikembangkan

- Integrasi dengan backend untuk newsletter subscription
- Multi-language support (Indonesia & English)
- Dark mode toggle
- Blog/artikel kesehatan mental
- Fitur konsultasi online
- Forum diskusi
- Quiz kesehatan mental
- Integrasi dengan API kesehatan mental

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📄 Lisensi

MIT License - bebas digunakan untuk keperluan apapun

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk mendukung kesadaran kesehatan mental di Indonesia.

---

**Note**: Website ini adalah clone dan pengembangan dari konsep Mindly .github.io dengan tampilan yang lebih modern dan interaktif menggunakan React.
