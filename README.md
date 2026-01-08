# Göktürk Kahriman - Portfolio Website

Modern, profesyonel freelance web developer portföy sitesi. React + Tailwind CSS ile geliştirildi.

## 🚀 Hızlı Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build
npm run build
```

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky navigation
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # Hakkımda
│   ├── Services.jsx      # Hizmetler (6 kart)
│   ├── Portfolio.jsx     # Demo projeler (8 kart)
│   ├── Pricing.jsx       # Fiyatlandırma
│   ├── Testimonials.jsx  # Referanslar
│   ├── Contact.jsx       # İletişim
│   └── Footer.jsx        # Footer
├── data/
│   └── demos.js          # Tüm data (demolar, servisler, vs.)
├── App.jsx               # Ana component
├── main.jsx              # Entry point
└── index.css             # Tailwind + özel stiller
```

## ➕ Yeni Demo Ekleme

`src/data/demos.js` dosyasındaki `demos` array'ine yeni obje ekleyin:

```javascript
{
  id: 9,  // Sıradaki ID
  title: "Yeni Proje",
  category: "Sektör Adı",
  description: "Proje açıklaması",
  thumbnail: null,  // Veya resim URL'i
  url: "https://proje-url.vercel.app",  // veya "#" eğer coming-soon ise
  status: "live",  // "live" veya "coming-soon"
  gradient: "from-blue-500 to-purple-500"  // Tailwind gradient
}
```

## 🌐 Vercel'e Deploy

1. GitHub'a push edin
2. Vercel'de "New Project" oluşturun
3. Repository'yi bağlayın
4. "Deploy" butonuna tıklayın

**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist`

## 📞 İletişim Bilgilerini Güncelleme

`src/data/demos.js` dosyasındaki `contactInfo` objesini düzenleyin:

```javascript
export const contactInfo = {
  whatsapp: "+905306506990",
  whatsappDisplay: "+90 530 650 69 90",
  email: "g.kahriman022@gmail.com",
  instagram: "gokturk_kahriman_dev"
};
```

## 🎨 Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar
- **Lucide React** - İkonlar

## 📝 Lisans

© 2025 Göktürk Kahriman. Tüm hakları saklıdır.
# gokturk-kahriman-dev
