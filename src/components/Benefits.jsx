export default function Benefits() {
  return (
    <section className="py-5 bg-light" id="benefits">
      <div className="container">
        <h2 className="display-8 text-center fw-bold mb-4">Why Shop With Us</h2>
        <div className="row g-4">
          <div className="col-md-4 d-flex">
            <div className="card shadow rounded w-100 border-0">
              <div className="card-body text-center d-flex flex-column p-4 h-100 mt-auto">
                <i class="bi bi-truck display-3 text-success mb-3"></i>
                <h3 className="fw-bold">Fast Delivery</h3>
                <p className="flex-grow-1 text-muted">
                  Receive your groceries quickly and safety.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card shadow rounded w-100 border-0">
              <div className="card-body text-center d-flex flex-column p-4 h-100 mt-auto">
                <i class="bi bi-tree display-3 text-success mb-3"></i>
                <h3 className="fw-bold">Organic Products</h3>
                <p className="flex-grow-1 text-muted">
                  Fresh food sourced from trusted local farms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card shadow rounded w-100 border-0">
              <div className="card-body text-center d-flex flex-column p-4 h-100 mt-auto">
                <i class="bi bi-credit-card display-3 text-success mb-3"></i>
                <h3 className="fw-bold">Secure Payment</h3>
                <p className="flex-grow-1 text-muted">
                  Shop with confidence using protected payment methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
