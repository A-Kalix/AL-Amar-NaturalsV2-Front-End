import { ARTICLES, FEELING_CARDS } from "@/constants";

const ResearchJournal = () => {
  return (
    <section
      className="blog-section"
      id="journal"
    >
      <div className="feel-heading">
        <h2 className="feel-title">How Do You Want To Feel?</h2>
        <p className="feel-copy">
          Whether you need a quiet reset or everyday clarity, we have a ritual
          that fits.
        </p>
      </div>

      <div className="feel-grid">
        {FEELING_CARDS.map((card) => (
          <article
            key={card.id}
            className="feel-card"
          >
            <img
              src={card.image}
              alt={card.title}
              className="feel-image"
            />
            <div className="feel-overlay" />
            <div className="feel-content">
              <span className="feel-eyebrow">{card.eyebrow}</span>
              <h3 className="feel-title">{card.title}</h3>
              <p className="feel-text">{card.desc}</p>
              <a
                href={card.href}
                className="feel-link"
              >
                {card.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-heading">
        <span className="blog-kicker">Research & Insights</span>
        <h2 className="blog-main-title">The Al-Amar Journal</h2>
      </div>

      <div className="blog-grid">
        {ARTICLES.map((article) => (
          <article
            key={article.id}
            className="blog-card"
          >
            <a
              href="#newsletter"
              className="blog-image-link"
              aria-label={article.headline}
            >
              <img
                src={article.image}
                alt={article.headline}
                className="blog-image"
              />
            </a>
            <div className="blog-copy">
              <span className="blog-date">May 03, 2026</span>
              <h3 className="blog-title">{article.headline}</h3>
              <p className="blog-summary">{article.summary}</p>
              <a
                href="#newsletter"
                className="blog-link"
              >
                {article.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResearchJournal;
