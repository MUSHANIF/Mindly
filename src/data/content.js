export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "alasan", label: "Alasan", href: "#alasan" },
  { id: "gejala", label: "Gejala & Jenis", href: "#gejala" },
  { id: "pengaruh", label: "Pengaruh", href: "#pengaruh" },
  { id: "dampak", label: "Dampak", href: "#dampak" },
];

export const heroContent = {
  title: "Kesehatan Mental",
  subtitle: "Pikiran Sehat, Hidup Berkualitas",
  description:
    "Mari bersama-sama memahami, peduli, dan menjaga kesehatan mental untuk kehidupan yang lebih baik.",
  ctaText: "Mulai Perjalanan",
  stats: [
    { number: "1 dari 4", label: "Orang mengalami masalah kesehatan mental" },
    { number: "70%", label: "Tidak mendapat penanganan yang tepat" },
    { number: "800rb+", label: "Kematian akibat bunuh diri per tahun" },
  ],
};

export const alasanContent = {
  title: "Mengapa Kesehatan Mental Penting?",
  subtitle: "Fondasi Kehidupan yang Berkualitas",
  reasons: [
    {
      icon: "🧠",
      title: "Produktivitas Meningkat",
      description:
        "Kesehatan mental yang baik meningkatkan fokus, kreativitas, dan kemampuan menyelesaikan masalah.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "❤️",
      title: "Hubungan Lebih Baik",
      description:
        "Kondisi mental yang sehat membantu membangun dan mempertahankan hubungan yang positif.",
      color: "from-red-400 to-pink-600",
    },
    {
      icon: "🌟",
      title: "Kualitas Hidup",
      description:
        "Kesejahteraan mental berkontribusi pada kebahagiaan dan kepuasan hidup secara keseluruhan.",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: "💪",
      title: "Ketahanan Mental",
      description:
        "Mental yang sehat membantu menghadapi tantangan dan bangkit dari kesulitan.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: "🎯",
      title: "Pencapaian Tujuan",
      description:
        "Stabilitas mental mendukung pencapaian tujuan pribadi dan profesional.",
      color: "from-purple-400 to-indigo-600",
    },
    {
      icon: "🏥",
      title: "Kesehatan Fisik",
      description:
        "Kesehatan mental yang baik berdampak positif pada kesehatan fisik secara keseluruhan.",
      color: "from-teal-400 to-cyan-600",
    },
  ],
};

export const gejalaContent = {
  title: "Gejala & Jenis Gangguan Mental",
  subtitle: "Kenali Tanda-tanda Awal",
  categories: [
    {
      name: "Depresi",
      symptoms: [
        "Perasaan sedih yang berkepanjangan",
        "Kehilangan minat pada aktivitas",
        "Perubahan nafsu makan",
        "Gangguan tidur",
        "Kelelahan berlebihan",
        "Perasaan tidak berharga",
      ],
      color: "bg-blue-500",
      icon: "😔",
    },
    {
      name: "Kecemasan",
      symptoms: [
        "Kekhawatiran berlebihan",
        "Gelisah dan tegang",
        "Detak jantung cepat",
        "Kesulitan berkonsentrasi",
        "Gangguan tidur",
        "Serangan panik",
      ],
      color: "bg-purple-500",
      icon: "😰",
    },
    {
      name: "Bipolar",
      symptoms: [
        "Perubahan suasana hati ekstrem",
        "Episode mania dan depresi",
        "Energi berlebihan atau sangat rendah",
        "Gangguan tidur",
        "Perilaku impulsif",
        "Pikiran yang melompat-lompat",
      ],
      color: "bg-orange-500",
      icon: "🎭",
    },
    {
      name: "PTSD",
      symptoms: [
        "Kilas balik traumatis",
        "Mimpi buruk berulang",
        "Menghindari pemicu trauma",
        "Kewaspadaan berlebihan",
        "Mati rasa emosional",
        "Mudah terkejut",
      ],
      color: "bg-red-500",
      icon: "😨",
    },
    {
      name: "OCD",
      symptoms: [
        "Pikiran obsesif berulang",
        "Perilaku kompulsif",
        "Ritual yang mengganggu",
        "Ketakutan berlebihan",
        "Kebutuhan akan kesempurnaan",
        "Kesulitan mengendalikan pikiran",
      ],
      color: "bg-green-500",
      icon: "🔄",
    },
    {
      name: "Gangguan Makan",
      symptoms: [
        "Obsesi terhadap berat badan",
        "Pola makan tidak normal",
        "Distorsi citra tubuh",
        "Perilaku makan rahasia",
        "Olahraga berlebihan",
        "Isolasi sosial",
      ],
      color: "bg-pink-500",
      icon: "🍽️",
    },
  ],
};

export const bullyingContent = {
  title: "Pengaruh Bullying",
  subtitle: "Dampak Jangka Panjang pada Kesehatan Mental",
  types: [
    {
      name: "Bullying Fisik",
      description:
        "Tindakan kekerasan fisik seperti memukul, mendorong, atau merusak barang.",
      effects: ["Luka fisik", "Trauma psikologis", "Ketakutan", "Depresi"],
      icon: "👊",
      gradient: "from-red-500 to-red-700",
    },
    {
      name: "Bullying Verbal",
      description:
        "Penggunaan kata-kata untuk menyakiti, menghina, atau mengancam.",
      effects: ["Rendah diri", "Kecemasan", "Isolasi sosial", "Gangguan makan"],
      icon: "💬",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      name: "Bullying Sosial",
      description:
        "Pengucilan, penyebaran rumor, atau merusak reputasi seseorang.",
      effects: [
        "Kesepian",
        "Depresi",
        "Kecemasan sosial",
        "Kepercayaan diri rendah",
      ],
      icon: "👥",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      name: "Cyberbullying",
      description: "Intimidasi melalui media digital dan platform online.",
      effects: ["Stres kronis", "Gangguan tidur", "Pikiran bunuh diri", "PTSD"],
      icon: "📱",
      gradient: "from-purple-500 to-purple-700",
    },
  ],
  statistics: [
    { percentage: "35%", description: "Siswa mengalami bullying di sekolah" },
    { percentage: "15%", description: "Mengalami cyberbullying" },
    { percentage: "71%", description: "Menyaksikan bullying di sekolah" },
    { percentage: "41%", description: "Berpikir bunuh diri akibat bullying" },
  ],
};

export const dampakContent = {
  title: "Dampak Kesehatan Mental",
  subtitle: "Memahami Konsekuensi dan Jalan Pemulihan",
  impacts: [
    {
      category: "Dampak Personal",
      items: [
        { icon: "😢", text: "Penurunan kualitas hidup" },
        { icon: "🎯", text: "Kesulitan mencapai tujuan" },
        { icon: "💔", text: "Masalah dalam hubungan" },
        { icon: "🏥", text: "Masalah kesehatan fisik" },
      ],
    },
    {
      category: "Dampak Sosial",
      items: [
        { icon: "👥", text: "Isolasi sosial" },
        { icon: "🏢", text: "Produktivitas menurun" },
        { icon: "💰", text: "Beban ekonomi" },
        { icon: "👨‍👩‍👧‍👦", text: "Dampak pada keluarga" },
      ],
    },
    {
      category: "Pencegahan",
      items: [
        { icon: "🧘", text: "Praktik mindfulness" },
        { icon: "🏃", text: "Olahraga teratur" },
        { icon: "🤝", text: "Dukungan sosial" },
        { icon: "👨‍⚕️", text: "Konsultasi profesional" },
      ],
    },
    {
      category: "Pemulihan",
      items: [
        { icon: "💊", text: "Terapi dan pengobatan" },
        { icon: "📚", text: "Edukasi kesehatan mental" },
        { icon: "🌱", text: "Pengembangan diri" },
        { icon: "❤️", text: "Self-care rutin" },
      ],
    },
  ],
};

export const quotesContent = {
  title: "Kata-kata Motivasi",
  subtitle: "Inspirasi untuk Perjalanan Kesehatan Mental Anda",
  quotes: [
    {
      text: "Kesehatan mental bukan destinasi, tetapi proses. Bukan tentang menjadi sempurna, tetapi tentang menjadi lebih baik.",
      author: "Noam Shpancer",
      gradient: "from-blue-400 to-purple-600",
    },
    {
      text: "Kamu tidak harus mengendalikan pikiranmu. Kamu hanya perlu berhenti membiarkan mereka mengendalikanmu.",
      author: "Dan Millman",
      gradient: "from-green-400 to-teal-600",
    },
    {
      text: "Pemulihan bukanlah satu ukuran untuk semua. Setiap orang memiliki jalan yang berbeda.",
      author: "Unknown",
      gradient: "from-pink-400 to-red-600",
    },
    {
      text: "Kesehatan mental sama pentingnya dengan kesehatan fisik. Jangan ragu untuk mencari bantuan.",
      author: "Unknown",
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      text: "Luka emosional adalah bagian dari kehidupan, tapi begitu juga penyembuhannya.",
      author: "Unknown",
      gradient: "from-indigo-400 to-purple-600",
    },
    {
      text: "Kekuatan sejati adalah meminta bantuan ketika kamu membutuhkannya.",
      author: "Unknown",
      gradient: "from-cyan-400 to-blue-600",
    },
  ],
};

export const footerContent = {
  about: {
    title: "Mindly ",
    description:
      "Platform edukasi kesehatan mental untuk meningkatkan kesadaran dan pemahaman tentang pentingnya kesehatan mental di Indonesia.",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "instagram", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  },
  quickLinks: [
    { label: "Tentang Kami", href: "#" },
    { label: "Layanan", href: "#" },
    { label: "Artikel", href: "#" },
    { label: "Kontak", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "E-Book Gratis", href: "#" },
    { label: "Webinar", href: "#" },
    { label: "Konsultasi", href: "#" },
  ],
  contact: {
    email: "mindly@gmail.com",
    phone: "+62 888 0911 2177",
    address: "Jl Perum Pondok cipta raya",
  },
  newsletter: {
    title: "Berlangganan Newsletter",
    description: "Dapatkan tips kesehatan mental dan informasi terbaru.",
    placeholder: "Masukkan email Anda",
    buttonText: "Berlangganan",
  },
};
