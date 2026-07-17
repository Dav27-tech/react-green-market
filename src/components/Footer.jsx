export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h4>
              <i className="bi bi-basket-fill me-2"></i>
              GreenMarket
            </h4>
            <p>Fresh organic food delivered to your home every.</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-white text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white text-decoration-none">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Newsletter</h5>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <button className="btn btn-success">Subscribe</button>
            </div>
            <div>
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-twitter-x me-3"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">
          © 2026 GreenMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
