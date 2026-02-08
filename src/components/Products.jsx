import KemasanImg from "../assets/KEMASAN.png"

const Products = () => {
  return (
    <section id="product" className="product-new">
      <div className="product-new-wrapper">
        
        {/* LEFT – IMAGE */}
        <div className="product-new-image">
          <img
            src={KemasanImg}
            alt="Garuda Coffee Arabika"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="product-new-content">
          <span className="product-new-label">Produk Unggulan</span>

          <h2>Kopi Bubuk Robusta – 250 gr</h2>

          <p className="product-new-desc">
            Kopi bubuk robusta pilihan dengan rasa pahit khas dan aroma kuat. 
            Digiling halus, siap seduh, cocok untuk kopi hitam, tubruk, atau kopi susu. 
            Dikemas rapi untuk menjaga kualitas dan kesegaran.
          </p>

          {/* HIGHLIGHTS */}
          <div className="product-new-highlights">
            <div>✔ 100% Robusta</div>
            <div>✔ Aroma kuat & rasa mantap</div>
            <div>✔ Berat bersih 250 gram</div>
          </div>

          <a
            href="https://linktr.ee/garudacoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="product-new-btn"
          >
            Beli Sekarang!
          </a>
        </div>

      </div>
    </section>
  )
}

export default Products
