const CategoryGrid = () => {
  return (
    <>
      {/* ── Cinematic Brand Banner ─────────────────── */}
      <section className={`
        brand-banner
      `} id="science">

        {/* Full-bleed product image */}
        <div className={`
        banner-bg
      `}>
          <img
            src="/assets/deodorant.png"
            alt="Al-Amar Pure Aura natural deodorant in a botanical setting"
            className={`
        banner-img
      `}
          />
        </div>

        {/* Gradient veil — fades to dark on both edges */}
        <div className={`
        banner-veil
      `} />

        {/* Centered overlay text */}
        <div className={`
        banner-copy
      `}>
          <span className={`
        banner-kicker
      `}>Al-Amar Naturals</span>
          <h2 className={`
        banner-headline
      `}>
            Where Nature<br />Meets Precision
          </h2>
          <p className={`
        banner-sub
      `}>
            Pharmaceutical formulation. Botanical ingredients. Zero compromise.
          </p>
          <a href="#products" className={`
        banner-cta
      `}>Discover the Collection</a>
        </div>

      </section>

      {/* ── Scrolling Value Ticker ─────────────────── */}
      <div className={`
        ticker-rail
      `} aria-hidden="true">
        <div className={`
        ticker-track
      `}>
          {[
            'Made in Italy',
            'No Aluminium',
            '100% Natural',
            'pH Balanced',
            'Dermatologist Tested',
            'Prebiotic Formula',
            'Cruelty Free',
            'Botanical Extracts',
          ].concat([
            'Made in Italy',
            'No Aluminium',
            '100% Natural',
            'pH Balanced',
            'Dermatologist Tested',
            'Prebiotic Formula',
            'Cruelty Free',
            'Botanical Extracts',
          ]).map((item, i) => (
            <span key={i} className={`
        ticker-item
      `}>
              {item}
              <span className={`
        ticker-dot
      `} aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryGrid;
