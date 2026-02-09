import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Hubungi Kami</h2>
        <p className="contact-subtitle">
          Klik ikon di bawah untuk terhubung langsung dengan Garuda Coffee
        </p>

        <div className="contact-icons">
          {/* EMAIL — FIX MOBILE */}
          <a
            href="mailto:garudacoffeepecalungan@gmail.com?subject=Tanya%20Produk%20Garuda%20Coffee&body=Halo%20Garuda%20Coffee,%0ASaya%20ingin%20bertanya%20tentang%20produk%20kopi%20Anda."
            className="contact-icon-link"
            aria-label="Kirim Email"
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
          © 2026 Kopi Garuda — Beli Kopi Gratis Ngopi ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;
