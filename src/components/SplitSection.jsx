import { useEffect, useRef } from 'react';

const SplitSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`
        story-reveal
      `} ref={sectionRef} id="story">
      <div className={`
        story-container
      `}>
        
        {/* Left Side: The Image (Parallax Frame) */}
        <div className={`
        story-image-wrap
      `}>
          <div className={`
        story-image-frame
      `}>
            <img 
              src="/assets/lifestyle-4.png" 
              alt="Al-Amar Naturals founder story" 
              className={`
        story-parallax-img
      `}
            />
            <div className={`
        story-image-overlay
      `}></div>
          </div>
          {/* Decorative tag */}
          <div className={`
        story-tag
      `}>EST. 2024</div>
        </div>

        {/* Right Side: The Content (Overlapping) */}
        <div className={`
        story-content-box
      `}>
          <div className={`
        story-content-inner
      `}>
            <span className={`
        story-kicker
      `}>Our Heritage</span>
            <h2 className={`
        story-title
      `}>Luxury Without<br/>the Excess</h2>
            
            <div className={`
        story-divider
      `}></div>
            
            <p className={`
        story-text
      `}>
              Born from a pursuit of clarity, <strong>Al-Amar Naturals</strong> was founded to bridge the gap between pharmaceutical precision and botanical purity. We believe that what you put on your body should be as refined as what you put in it.
            </p>
            
            <p className={`
        story-text
      `}>
              Every formula is a testament to Italian craftsmanship—developed with clinical rigor and a deep respect for the natural world. No aluminium, no compromises, just pure efficacy.
            </p>

            <div className={`
        story-founder
      `}>
              <span className={`
        founder-label
      `}>Founder & Formulator</span>
              <span className={`
        founder-signature
      `}>Al-Amar Team</span>
            </div>

            <a href="#products" className={`
        story-cta
      `}>Explore the Science</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SplitSection;
