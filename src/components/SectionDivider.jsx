const SectionDivider = ({ colorTop, colorBottom, flip = false }) => {
  return (
    <div 
      className={`
        section-divider
        ${flip
        ?
        'divider-flipped'
        :
      `} 
      style={{ backgroundColor: colorBottom }}
    >
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`
        divider-svg
      `}
      >
        <path 
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 45C840 60 960 90 1080 105C1200 120 1320 120 1380 120H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" 
          fill={colorTop}
        />
      </svg>
      
      {/* Floating Brand Seal Badge */}
      <div className={`
        brand-seal-wrap
      `}>
        <div className={`
        brand-seal
      `}>
          <svg viewBox="0 0 100 100" className={`
        seal-text-svg
      `}>
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text className={`
        seal-text
      `}>
              <textPath xlinkHref="#circlePath">
                · 100% NATURAL · CLINICALLY TESTED · MADE IN ITALY
              </textPath>
            </text>
          </svg>
          <div className={`
        seal-inner
      `}>
            <svg viewBox="0 0 24 24" className={`
        seal-drop-svg
      `} fill="currentColor">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
