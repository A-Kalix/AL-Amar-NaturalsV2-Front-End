const NewsletterSection = () => {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={`
        nl-section
      `} id="newsletter">
      <div className={`
        nl-inner
      `}>
        <h2 className={`
        nl-title
      `}>Join the Al-Amar Wellbeing Circle</h2>
        <p className={`
        nl-copy
      `}>
          Sign up for exclusive offers, early access to new launches, and curated skincare inspiration.
        </p>
        <strong className={`
        nl-offer
      `}>Subscribe now and enjoy 10% off your first order.</strong>
        <form className={`
        nl-form
      `} onSubmit={handleNewsletterSubmit}>
          <label className={`
        nl-label
      `} htmlFor="nl-email">Email</label>
          <input
            id="nl-email"
            className={`
        nl-input
      `}
            type="email"
            placeholder="Enter your email"
          />
          <button className={`
        nl-button
      `} type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
