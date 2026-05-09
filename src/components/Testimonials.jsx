const REVIEWS = [
  {
    id: "review-1",
    image: "/assets/lifestyle-1.png",
    text: "I love, love LOVE my Al-Amar products! Pure Aura keeps me fresh all day. The formula feels considered and my skin never feels irritated...",
    stars: 5,
    name: "Sarah M.",
    verified: true,
    product: "Pure Aura Natural Deodorant",
  },
  {
    id: "review-2",
    image: "/assets/deodorant-with-box.png",
    text: "I often reach for Calm Pure every morning. It leaves my skin feeling clean and balanced without that tight, stripped feeling...",
    stars: 5,
    name: "Lina K.",
    verified: true,
    product: "Calm Pure Face Cleanser",
  },
  {
    id: "review-3",
    image: "/assets/lifestyle-3.png",
    text: "The Al-Amar experience begins with the scent — so natural and clean. The packaging is beautiful and the formula actually works...",
    stars: 5,
    name: "Joud R.",
    verified: false,
    product: "Pure Aura Natural Deodorant",
  },
  {
    id: "review-4",
    image: "/assets/lifestyle-4.png",
    text: "As someone with sensitive skin, discovering Al-Amar truly opened a new door. The pH balance is perfect and my skin has never been calmer...",
    stars: 5,
    name: "Nadia A.",
    verified: false,
    product: "Calm Pure Face Cleanser",
  },
];

const Stars = ({ count }) => (
  <span
    className="review-stars"
    aria-label={`${count} out of 5 stars`}
  >
    {"★".repeat(count)}
  </span>
);

const Testimonials = () => {
  return (
    <section className="testi-section">
      {/* Heading + aggregate rating */}
      <div className="testi-heading">
        <h2 className="testi-title">What our community is saying</h2>
        <div className="testi-aggregate">
          <Stars count={5} />
          <span className="testi-score">5.00 ★ (6)</span>
          <span className="testi-verified-badge">
            <svg
              className="verified-check"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <rect
                width="16"
                height="16"
                rx="3"
                fill="#6b6b4c"
              />
              <path
                d="M3.5 8.5L6.5 11.5L12.5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Verified
          </span>
        </div>
      </div>

      {/* 4-column card grid */}
      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <article
            key={review.id}
            className="review-card"
          >
            <div className="review-image-wrap">
              <img
                src={review.image}
                alt={`${review.name} review`}
                className="review-image"
              />
            </div>
            <div className="review-body">
              <p className="review-text">{review.text}</p>
              <Stars count={review.stars} />
              <div className="review-author">
                <strong className="review-name">{review.name}</strong>
                {review.verified && (
                  <svg
                    className="review-verified-icon"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-label="Verified reviewer"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#6b6b4c"
                    />
                    <path
                      d="M4 8.5L6.5 11L12 5.5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="review-product">{review.product}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
