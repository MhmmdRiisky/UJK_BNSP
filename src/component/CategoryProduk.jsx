import data from "../utils/CategoryProduk";
import "../assets/css/CategoryProduk.css";  // Corrected import
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div>
      <div className="header">
        <div className="dot"></div>
        <h2 className="headerTitle">Our Products</h2>
      </div>
      <h1 className="mainTitle">Explore Our Products</h1>

      {/* Fitur */}
      <div className="featureContainer">
        {data.filter(item => item.type === "feature").map((feature, index) => (
          <div key={index} className="featureItem">
            <i className={`${feature.icon} icon`}></i>
            <p className="featureText">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Grid Produk */}
      <div className="grid">
        {data.filter(item => item.type === "product").map((product, index) => (
          <div key={index} className="card">
            <Link to={`/PesanProduk/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
