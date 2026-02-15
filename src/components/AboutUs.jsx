const AboutUs = () => {
  return (
    <section id="about">
      {/* Header Section */}
      <div className="section-header">
        <h1>Tentang Kami</h1>
      </div>

      {/* Map Section */}
      <div className="about-map-full">
        <iframe
          title="Lokasi Garuda Coffee"
          src="https://www.google.com/maps?q=-7.018917,109.855833&z=15&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Description Section */}
      <div className="about-description">
        <p>
          Garuda Coffee lahir dari kecintaan terhadap kopi nusantara serta
          keinginan untuk menghadirkan produk kopi berkualitas langsung dari
          petani desa. Kami bekerja sama dengan petani lokal untuk menjaga mutu
          biji kopi, proses pengolahan, serta keberlanjutan lingkungan.
        </p>

        <p>
          Setiap cangkir Garuda Coffee membawa cerita tentang kerja keras,
          tradisi, dan semangat untuk mengangkat potensi desa agar dikenal lebih
          luas. Kami percaya kopi bukan sekadar minuman, tetapi pengalaman yang
          menyatukan rasa dan kebersamaan.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;