# Manajemen Buku Pribadi

Aplikasi sederhana berbasis React untuk mencatat buku yang dimiliki, sedang dibaca, atau ingin dibeli.

## Fitur

- Tambah, edit, dan hapus buku
- Filter berdasarkan status
- Pencarian buku
- Statistik buku
- Data disimpan di `localStorage`

## Teknologi

- React (Hooks, Context API, Router)
- Custom Hooks (`useLocalStorage`, `useBookStats`)
- LocalStorage
- React Testing Library

## Instalasi & Jalankan

1. Clone repositori
2. Jalankan `npm install`
3. Jalankan `npm start`
4. Buka `http://localhost:3000`

## Screenshot

![Screenshot Aplikasi](./screenshot.png)

## Struktur React yang Digunakan

- **Context API**: Untuk state management global buku
- **Custom Hooks**: Untuk logika reusable (`useLocalStorage`, `useBookStats`)
- **React Router**: Navigasi antar halaman
- **useState/useEffect**: Untuk state lokal dan efek samping
- **useReducer**: Untuk logika state kompleks di context