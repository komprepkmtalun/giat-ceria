const FORM_TTD_URL = "https://forms.gle/WZxC1tQrCorNyhR18";

const WHATSAPP_URL = "https://wa.me/6281312583005";
const INSTAGRAM_URL =
  "https://www.instagram.com/puskesmastalun_cirebonkab?igsh=MWlrcmtzOWk1OXR6NQ==";
const TIKTOK_URL =
  "https://www.tiktok.com/@puskesmastalun_cirebon?_r=1&_t=ZS-97BlZp4Olzl";
const MAPS_URL = "https://maps.app.goo.gl/3zMQuf27qwesSjxg8";

function App() {
  return (
    <main className="min-h-screen bg-[#FFF7EE] text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <AnemiaInfo />
      <ProgramSection />
      <FormSection />
      <MaterialSection />
      <ProfileSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-black text-[#E84A7A]">
          GIAT CERIA
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#tentang" className="hover:text-[#E84A7A]">
            Tentang
          </a>
          <a href="#materi" className="hover:text-[#E84A7A]">
            Materi
          </a>
          <a href="#form" className="hover:text-[#E84A7A]">
            Form TTD
          </a>
          <a href="#kontak" className="hover:text-[#E84A7A]">
            Kontak
          </a>
        </div>

        <a
          href={FORM_TTD_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#E84A7A] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:scale-105"
        >
          Isi Form
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF1DE] via-[#FFE1EA] to-[#DDEBFF]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5B7BBF] shadow-sm">
            Gerakan Remaja Putri Cegah Anemia
          </div>

          <div className="mb-6">
            <LogoStrip />
          </div>

          <h1 className="text-5xl font-black leading-tight text-[#E84A7A] md:text-7xl">
            GIAT <br />
            CERIA
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
            Ayo cegah anemia sejak remaja. Minum Tablet Tambah Darah secara
            teratur, makan bergizi seimbang, dan pantau kesehatanmu mulai hari
            ini.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={FORM_TTD_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#E84A7A] px-7 py-4 text-center font-bold text-white shadow-lg transition hover:scale-105"
            >
              Isi Form Konsumsi TTD
            </a>

            <a
              href="/booklet-giat-ceria.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-4 text-center font-bold text-[#E84A7A] shadow-lg transition hover:scale-105"
            >
              Baca Booklet
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-xl">
          <div className="rounded-[1.5rem] bg-[#FFF1DE] p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-[#5B7BBF]">
              Anemia? No Way!
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#E84A7A]">
              Remaja sehat, masa depan hebat.
            </h2>
            <div className="mt-6 grid gap-4">
              <InfoCard title="1 Tablet/Minggu" text="Konsumsi TTD secara teratur." />
              <InfoCard title="Gizi Seimbang" text="Pilih makanan kaya zat besi dan vitamin C." />
              <InfoCard title="Pantau Rutin" text="Laporkan konsumsi TTD melalui form online." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <h3 className="font-black text-[#5B7BBF]">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-bold uppercase tracking-wider text-[#E84A7A]">
            Tentang Program
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Program edukasi dan pelaporan konsumsi TTD untuk remaja putri.
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-slate-700">
          Website ini dibuat sebagai media informasi, edukasi, dan pelaporan
          konsumsi Tablet Tambah Darah. Siswa dapat mengakses materi anemia,
          membaca booklet dan leaflet edukasi, mengisi form pelaporan TTD, serta
          terhubung dengan kanal resmi Puskesmas Talun.
        </p>
      </div>
    </section>
  );
}
function LogoStrip() {
  const logos = [
    { src: "/logo-ugj.png", alt: "Logo Universitas Gunung Jati" },
    { src: "/logo-pkm-talun.png", alt: "Logo PKM Talun" },
    { src: "/logo-puskesmas.png", alt: "Logo Puskesmas" },
    { src: "/logo-germas.png", alt: "Logo Germas" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-sm"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function AnemiaInfo() {
  const factors = [
    {
      title: "Pengetahuan Gizi",
      text: "Pemahaman tentang makanan bergizi membantu remaja mencegah anemia.",
    },
    {
      title: "Pola Makan",
      text: "Asupan zat besi, protein, dan vitamin C berperan penting dalam pembentukan Hb.",
    },
    {
      title: "Kepatuhan TTD",
      text: "Konsumsi Tablet Tambah Darah secara rutin membantu mencegah anemia.",
    },
  ];

  const symptoms = [
    "5L: lemah, letih, lesu, lelah, lunglai",
    "Lebih emosional",
    "Pucat pada kulit, kelopak mata, bibir, lidah, telapak tangan, dan kuku",
    "Pandangan kunang-kunang dan pusing",
    "Mata berkunang-kunang",
  ];

  const prevention = [
    "Meningkatkan pengetahuan dan kepedulian akan anemia",
    "Konsumsi protein hewani seperti ayam, telur, ikan, dan daging",
    "Konsumsi sayur dan buah yang mengandung vitamin C",
    "Minum Tablet Tambah Darah (TTD) secara teratur 1 minggu sekali",
    "Hindari teh dan kopi karena dapat menghambat penyerapan zat besi",
    "Jangan konsumsi TTD bersamaan dengan obat asam lambung, susu, teh, dan kopi",
    "Periksa kadar Hb saat usia 13 tahun atau tiap 5 tahun setelahnya",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-bold uppercase tracking-wider text-[#5B7BBF]">
            Seputar Anemia
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Kenali anemia dan cara mencegahnya.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Informasi penting seputar anemia pada remaja putri, mulai dari
            pengertian, faktor risiko, gejala, hingga langkah pencegahannya.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#FFF1DE] to-[#FFE1EA] p-7 shadow-sm lg:col-span-5">
            <div className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#E84A7A] shadow-sm">
              Apa itu Anemia?
            </div>

            <h3 className="text-2xl font-black leading-tight text-slate-900">
              Kondisi ketika tubuh kekurangan sel darah merah fungsional.
            </h3>

            <p className="mt-4 leading-relaxed text-slate-700">
              Anemia adalah keadaan ketika tubuh kekurangan sel darah merah
              fungsional atau kadar hemoglobin (Hb) kurang dari{" "}
              <span className="font-bold text-[#E84A7A]">
                12 g/dL pada perempuan
              </span>{" "}
              dan kurang dari{" "}
              <span className="font-bold text-[#E84A7A]">
                13,5 g/dL pada laki-laki
              </span>
              .
            </p>

            <div className="mt-6 rounded-3xl bg-white/80 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-[#5B7BBF]">
                Dampak awal yang sering terasa
              </p>
              <p className="mt-2 text-slate-700">
                Tubuh mudah lemas, kurang fokus, cepat lelah, dan aktivitas
                harian bisa terganggu.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] bg-[#DDEBFF] p-7 shadow-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-bold uppercase tracking-wider text-[#5B7BBF]">
                    Faktor Risiko
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-slate-900">
                    Faktor yang mempengaruhi status anemia remaja.
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {factors.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white p-5">
                    <h4 className="font-black text-[#5B7BBF]">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[2rem] bg-[#FFE1EA] p-7 shadow-sm">
              <p className="font-bold uppercase tracking-wider text-[#E84A7A]">
                Gejala Anemia
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Kenali tanda-tandanya sejak awal.
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {symptoms.map((item) => (
                  <div
                    key={item}
                    className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-[#FFF7D6] p-7 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="font-bold uppercase tracking-wider text-[#E84A7A]">
                Pencegahan Anemia
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Langkah sederhana untuk mencegah anemia.
              </h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                Pencegahan anemia bisa dimulai dari kebiasaan makan, konsumsi
                TTD, serta pemeriksaan kesehatan secara berkala.
              </p>
            </div>

            <div className="grid gap-3 lg:col-span-8">
              {prevention.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E84A7A] text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <p className="leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-[2rem] bg-[#5B7BBF] p-8 text-white md:p-12">
        <p className="font-bold uppercase tracking-wider text-[#FFF1DE]">
          Fokus Program
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Remaja putri bebas anemia, lebih sehat, aktif, dan percaya diri.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ProgramCard title="Edukasi Anemia" text="Materi singkat, booklet, dan leaflet edukatif." />
          <ProgramCard title="Pelaporan TTD" text="Form konsumsi TTD yang terhubung ke data pelaporan." />
          <ProgramCard title="Kontak Puskesmas" text="Akses WhatsApp, Instagram, TikTok, dan lokasi Puskesmas Talun." />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ title, text }) {
  return (
    <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/90">{text}</p>
    </div>
  );
}

function FormSection() {
  return (
    <section id="form" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="font-bold uppercase tracking-wider text-[#E84A7A]">
          Form Pelaporan
        </p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Sudah minum Tablet Tambah Darah minggu ini?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
          Isi form berikut agar data konsumsi TTD dapat tercatat dan digunakan
          sebagai pelaporan kegiatan.
        </p>

        <a
          href={FORM_TTD_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-[#FFB703] px-8 py-4 font-black text-slate-900 shadow-lg transition hover:scale-105"
        >
          Isi Form Konsumsi TTD
        </a>
      </div>
    </section>
  );
}

function MaterialSection() {
  return (
    <section id="materi" className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="font-bold uppercase tracking-wider text-[#5B7BBF]">
          Materi Edukasi
        </p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Baca materi Giat Ceria.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Pelajari booklet dan leaflet edukasi anemia secara langsung di halaman
          ini. Untuk tampilan lebih besar, klik tombol lihat lebih jelas.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <div className="mx-auto max-w-3xl">
          <PdfPreview
            title="Booklet Giat Ceria"
            description="Materi lengkap tentang anemia, penyebab, dampak, gizi seimbang, dan tips minum Tablet Tambah Darah."
            file="/booklet-giat-ceria.pdf"
            buttonText="Lihat Booklet Lebih Jelas"
            viewerClass="h-[760px]"
            type="portrait"
          />
        </div>

        <PdfPreview
          title="Leaflet Giat Ceria"
          description="Ringkasan edukasi anemia dalam format leaflet yang mudah dibaca."
          file="/leaflet-giat-ceria.pdf"
          buttonText="Lihat Leaflet Lebih Jelas"
          viewerClass="h-[560px]"
          type="landscape"
        />
      </div>
    </section>
  );
}

function PdfPreview({ title, description, file, buttonText, viewerClass, type }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
      <div className="flex flex-col gap-5 border-b border-pink-100 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black text-[#E84A7A]">{title}</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          className="w-fit shrink-0 rounded-full bg-[#E84A7A] px-5 py-3 font-bold text-white shadow-md transition hover:scale-105"
        >
          {buttonText}
        </a>
      </div>

      <div
        className={`bg-[#FFF1DE] p-4 ${
          type === "portrait" ? "md:p-6" : "md:p-5"
        }`}
      >
        <div
          className={`mx-auto overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-inner ${
            type === "portrait" ? "max-w-[520px]" : "w-full"
          } ${viewerClass}`}
        >
          <iframe
            src={`${file}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title={title}
            className="h-full w-full bg-white"
          />
        </div>
      </div>
    </div>
  );
}


function ProfileSection() {
  return (
    <section id="kontak" className="mx-auto max-w-6xl px-5 py-16">
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-md">
        <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="font-bold uppercase tracking-wider text-[#5B7BBF]">
              Puskesmas Talun
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Terhubung dengan kanal resmi Puskesmas.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Dapatkan informasi kesehatan, kegiatan, dan layanan Puskesmas
              Talun melalui WhatsApp, Instagram, TikTok, dan lokasi Google Maps.
            </p>
          </div>

          <div className="grid gap-3">
            <SocialButton href={WHATSAPP_URL} label="WhatsApp Puskesmas" />
            <SocialButton href={INSTAGRAM_URL} label="Instagram Puskesmas" />
            <SocialButton href={TIKTOK_URL} label="TikTok Puskesmas" />
            <SocialButton href={MAPS_URL} label="Buka Google Maps" />
          </div>
        </div>

        <div className="border-t border-pink-100 bg-[#FFF1DE] p-4 md:p-6">
          <div className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-inner">
            <iframe
              title="Lokasi Puskesmas Talun"
              src="https://www.google.com/maps?q=Puskesmas%20Talun%20Cirebon&output=embed"
              className="h-[320px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl bg-[#FFF1DE] px-5 py-4 font-bold text-slate-800 transition hover:bg-[#FFB703]"
    >
      {label}
    </a>
  );
}

function Footer() {
  const logos = [
    { src: "/logo-ugj.png", alt: "Logo Universitas Gunung Jati" },
    { src: "/logo-pkm-talun.png", alt: "Logo PKM Talun" },
    { src: "/logo-puskesmas.png", alt: "Logo Puskesmas" },
    { src: "/logo-germas.png", alt: "Logo Germas" },
  ];

  return (
    <footer className="bg-slate-900 px-5 py-7 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {logos.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-9 w-auto object-contain"
              />
            ))}
          </div>

          <div className="hidden h-10 w-px bg-white/15 md:block" />

          <div>
            <p className="font-black leading-none">GIAT CERIA</p>
            <p className="mt-1 text-xs text-white/60">
              Gerakan Remaja Putri Cegah Anemia
            </p>
          </div>
        </div>

        <div className="max-w-md text-center md:text-right">
          <p className="text-xs leading-relaxed text-white/60">
            Didukung oleh Universitas Swadaya Gunung Jati dan Puskesmas Talun, dengan semangat GERMAS (Gerakan Masyarakat Hidup Sehat).
          </p>
          <p className="mt-2 text-xs text-white/40">
            © 2026 GIAT CERIA. Puskesmas Talun.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;