import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Hubungi Kami</h2>
        <p className="contact-subtitle">
          Klik ikon di bawah untuk terhubung langsung dengan Kopi Garuda
        </p>

        <div className="contact-icons">
          {/* GMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=garudacoffeepecalungan@gmail.com&su=Tanya%20Produk%20Kopi%20Garuda&body=Halo%20Kopi%20Garuda,%0ASaya%20ingin%20bertanya%20tentang%20produk%20kopi%20Anda."
            target="_blank"
            rel="noreferrer"
            className="contact-icon-link"
            aria-label="Kirim Email via Gmail"
          >
            <MdEmail />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6281578019608"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-link whatsapp"
            aria-label="WhatsApp Kopi Garuda"
          >
            <FaWhatsapp />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/garudacoffee_"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-link instagram"
            aria-label="Instagram Kopi Garuda"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="contact-footer">
          © 2026 Kopi Garuda — Dari Desa untuk Secangkir Kopi Terbaikmu ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;
