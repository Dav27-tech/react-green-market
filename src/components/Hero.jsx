export default function Hero() {
  function shopNow() {
    alert("Welcome to GreenMarket!");
  }

  return (
    <section className="hero text-white">
      <div className="hero-video-container">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/7Dxu97R077w?autoplay=1&mute=1&loop=1&playlist=7Dxu97R077w&controls=0&rel=0&modestbranding=1"
          title="Organic Farm"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-content text-center">
        <h1 className="display-3 fw-bold">Fresh Organic Food</h1>
        <p className="lead my-4">
          Health ingredients delivered directly from local farmers.
        </p>
        <button className="btn btn-warning btn-lg" onClick={shopNow}>
          Shop Now
        </button>
      </div>
    </section>
  );
}
