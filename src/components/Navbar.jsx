import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [active, setActive] = useState("beranda")
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (menu) => {
    setActive(menu)
    setMenuOpen(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActive(id)

            // update URL tanpa reload
            history.replaceState(null, null, `#${id}`)
          }
        })
      },
      {
        root: null,
        threshold: 0.6,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Garuda Coffee Logo" />
        <span>Garuda Coffee</span>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#beranda"
            className={active === "beranda" ? "active" : ""}
            onClick={() => handleClick("beranda")}
          >
            Beranda
          </a>
        </li>

        <li>
          <a
            href="#layanan"
            className={active === "layanan" ? "active" : ""}
            onClick={() => handleClick("layanan")}
          >
            Layanan
          </a>
        </li>

        <li>
          <a
            href="#product"
            className={active === "product" ? "active" : ""}
            onClick={() => handleClick("product")}
          >
            Produk
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
