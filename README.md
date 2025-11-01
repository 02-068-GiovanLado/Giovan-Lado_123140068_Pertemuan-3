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

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c7d4957f-29c5-4ddb-846d-972ed8cfac46" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d2dbd5b1-2861-43da-a64c-a3799aedb6d3" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d310c553-3a6f-4b7a-9176-75bb3499721e" />

## Struktur React yang Digunakan

- **Context API**: Untuk state management global buku
- **Custom Hooks**: Untuk logika reusable (`useLocalStorage`, `useBookStats`)
- **React Router**: Navigasi antar halaman
- **useState/useEffect**: Untuk state lokal dan efek samping
- **useReducer**: Untuk logika state kompleks di context

## Testing

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bb886969-211b-4e2d-aa56-7f131fec8d60" />

