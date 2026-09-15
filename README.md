# 🤖 Oxiox AI Chatbot - Frontend

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
</div>

<br />

<div align="center">
  <strong>Masa Depan Interaksi Kampus UKM Oxigen Ada di Sini.</strong> <br>
  Antarmuka web modern, responsif, dan dinamis untuk AI Chatbot eksklusif UKM Oxigen, dibangun dengan teknologi web terkini.
</div>

<br />

<div align="center">
  <a href="https://frontend-chatbot-ai-oxi.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-frontend--chatbot--ai--oxi.vercel.app-10b981?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
</div>

---

## ✨ Fitur Utama

- 🎨 **Desain UI/UX Modern & Premium**: Antarmuka bergaya *glassmorphism* dan mode gelap elegan.
- ⚡ **Sangat Cepat**: Dibangun dengan **Vite** dan **React 19**, menjamin waktu render instan dan *loading* secepat kilat.
- 📱 **Responsif di Semua Perangkat**: Tampilan *chat* yang sempurna baik di desktop maupun *smartphone*.
- ✨ **Animasi Mulus**: Didukung oleh **Framer Motion** & **GSAP** untuk transisi *chat*, *typing indicator*, dan kemunculan elemen yang *smooth*.
- 🔗 **Smart Text Formatting**: Otomatis mendeteksi *link* agar bisa diklik dan mendeteksi teks tebal *(bold markdown)* dari AI.
- 🔌 **Integrasi n8n API**: Terhubung langsung ke *webhook backend* n8n untuk pemrosesan NLP dari AI Chatbot.

## 🛠️ Teknologi yang Digunakan

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + clsx + tailwind-merge
- **Animasi**: Framer Motion & GSAP
- **Ikon**: Lucide React
- **Deployment**: Vercel

## 🚀 Memulai (Menjalankan secara Lokal)

Ikuti langkah-langkah di bawah ini untuk menjalankan *project* ini di komputer kamu.

### Persyaratan
- [Node.js](https://nodejs.org/en/) versi 18 ke atas
- npm, yarn, pnpm, atau bun (pilih salah satu)

### Instalasi

1. **Clone repository ini** (jika menggunakan git)
   ```bash
   git clone <URL_REPO_KAMU>
   cd ai-chatbot-frontend
   ```

2. **Install dependensi**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Buka di Browser**
   Buka `http://localhost:5173` di browser kamu untuk melihat aplikasinya!

## 📡 API Integration

Aplikasi ini mengirimkan setiap pertanyaan (*prompt*) dari user ke *endpoint* API (Webhook n8n) berikut. **Di balik API tersebut, sistem menggunakan n8n yang dihubungkan ke beberapa model AI canggih dengan *workflow* yang telah dirancang dan dioptimalkan untuk menjadi yang terbaik dalam memberikan respons.**
- **Endpoint**: `https://n8n.oxiox.my.id/webhook/2f5b14ba-d8f2-49d4-aac0-4c218783c312`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "id": "MABA-1234",
    "text": "Apa itu UKM Oxigen?"
  }
  ```

## 🤝 Kontribusi
Jika kamu dari tim UKM Oxigen dan ingin berkontribusi menambah fitur (seperti *chat history* atau *dark/light theme toggle*), jangan ragu untuk membuat *Pull Request* atau *Issue*!

---
<div align="center">
  Dibuat dengan 💙 oleh Tim UKM Oxigen
</div>
