const AboutUs = () => {
  return (
    <section id="about">
      {/* JUDUL */}
      <div className="section-header">
        <h1>Tentang Kami</h1>
      </div>

      {/* MAP */}
      <div className="about-map-full">
        <iframe
          title="Lokasi Garuda Coffee"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.0289837405992!2d109.85568474999999!3d-7.0187206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70150031badb9d%3A0x665c1e0c45e4edbd!2sGaruda%20Coffee!5e0!3m2!1sen!2sid!4v1234567890"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* CERITA TANPA SUBJUDUL */}
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