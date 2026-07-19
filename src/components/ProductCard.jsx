export default function ProductCard({ product }) {
  return (
    <div className="col-md-4 d-flex">
      <div className="card shadow w-100">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body text-start d-flex flex-column">
          <h3 className="fw-bold">{product.name}</h3>
          <p className="flex-grow-1">{product.category}</p>
          <span className="text-success fw-bold mb-1">${product.price}</span>
          <button className="btn btn-outline-success">View Product</button>
        </div>
      </div>
    </div>
  );
}
