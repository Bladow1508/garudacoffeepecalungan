const Services = () => {
  return (
    <section id="layanan">
      <div className="section-header">
        <h1>Kopi Desa Rasa Juara</h1>
        <p>
          Kami menghadirkan kopi pilihan terbaik dari desa,
          diproses dengan penuh kualitas untuk rasa yang konsisten dan autentik.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <span className="card-icon">☕</span>
          <h3>100% Kopi Original</h3>
          <p>
            Biji kopi murni tanpa campuran, langsung dari petani lokal
            dengan proses pasca panen terjaga.
          </p>
        </div>

        <div className="card">
          <span className="card-icon">🌱</span>
          <h3>Dari Petani Desa</h3>
          <p>
            Dipanen langsung dari kebun rakyat, membantu meningkatkan
            kesejahteraan petani kopi lokal.
          </p>
        </div>

        <div className="card">
          <span className="card-icon">⭐</span>
          <h3>Kualitas Terpercaya</h3>
          <p>
            Telah dinikmati ribuan pelanggan dengan cita rasa
            yang konsisten dan memuaskan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
