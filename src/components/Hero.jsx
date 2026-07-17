export default function Hero() {
  function shopNow() {
    alert("Welcome to GreenMarket!");
  }

  return (
    <section className="hero text-white">
      <div className="hero-video-container">
        <iframe
          className="hero-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7Dxu97R077w?si=mpT6zrNYG2KEI61X"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
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
