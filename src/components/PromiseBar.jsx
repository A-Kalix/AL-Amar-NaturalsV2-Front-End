import { PROMISES } from '@/constants';

const PromiseIcon = ({ icon }) => {

  /* Organic / botanical leaf */
  if (icon === 'organic') {
    return (
      <svg className={`
        promise-icon
      `} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 56C32 56 14 44 14 28C14 18 22 10 32 10C42 10 50 18 50 28C50 44 32 56 32 56Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 10V56" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 30C32 30 22 24 20 16" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 36C32 36 42 30 44 20" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  /* Pure & natural — water drop */
  if (icon === 'drop') {
    return (
      <svg className={`
        promise-icon
      `} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 8C32 8 16 26 16 38C16 47.941 23.163 56 32 56C40.837 56 48 47.941 48 38C48 26 32 8 32 8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 40C24 44.418 27.582 48 32 48" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  /* Cruelty-free / vegan — bunny silhouette as simple leaf-heart */
  if (icon === 'leaf') {
    return (
      <svg className={`
        promise-icon
      `} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 52C32 52 12 40 12 26C12 18.268 18.268 12 26 12C28.8 12 31.4 12.9 33.6 14.5C35.8 12.9 38.4 12 42 12C49.732 12 56 18.268 56 26C56 40 32 52 32 52Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  /* Made in Italy — Italian tricolor flag */
  if (icon === 'italy') {
    return (
      <svg className={`
        promise-icon
      `} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        {/* Flag outline */}
        <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
        {/* Green stripe */}
        <rect x="8" y="16" width="16" height="32" rx="2" fill="#009246"/>
        {/* White stripe */}
        <rect x="24" y="16" width="16" height="32" fill="#ffffff"/>
        {/* Red stripe */}
        <rect x="40" y="16" width="16" height="32" rx="2" fill="#CE2B37"/>
        {/* Redraw full border on top so corners look clean */}
        <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    );
  }

  return null;
};

const PromiseBar = () => {
  return (
    <section className={`
        promise-bar
      `}>
      <div className={`
        promise-grid
      `}>
        {PROMISES.map(promise => (
          <div key={promise.id} className={`
        promise-item
      `}>
            <PromiseIcon icon={promise.icon} />
            <h4 className={`
        promise-title
      `}>{promise.title}</h4>
            <p className={`
        promise-subtitle
      `}>{promise.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseBar;
