# Ionic Angular App

## Prasyarat
Pastikan Anda telah menginstal perangkat lunak berikut sebelum memulai:
- **Node.js**: Versi 16 atau lebih baru
- **npm**: Versi 8 atau lebih baru
- **Ionic CLI**: [Panduan instalasi](https://ionicframework.com/docs/cli)
- **Angular CLI**: [Panduan instalasi](https://angular.io/cli)
- **Android Studio**: Untuk membangun aplikasi Android
- **Xcode**: Untuk membangun aplikasi iOS (hanya tersedia di Mac)

---

## Kloning Repositori
# Clone repository
```bash
git clone https://github.com/[username]/[nama-repo].git
```

# Masuk ke direktori proyek
```bash
cd [nama-repo]
```

# Install dependencies
```bash
npm install
```

## Run Development

# Jalankan di browser
```bash
ionic serve
```

# Buka dibrowser: http://localhost:8100


## Build Anroid

# Tambahkan platform Android
```bash
ionic cap add android
```

# Build dan sinkronkan
```bash
ionic build
ionic cap sync android
```

# Buka di Android Studio
```bash
ionic cap open android
```

## Build IOS

# Tambahkan platform iOS
```bash
ionic cap add ios
```

# Build dan sinkronkan
```bash
ionic build
ionic cap sync ios
```

# Buka di Xcode
```bash
ionic cap open ios
```

