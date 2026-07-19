import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section className="py-5" id="products">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Featured Products</h2>
        <div className="row g-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
