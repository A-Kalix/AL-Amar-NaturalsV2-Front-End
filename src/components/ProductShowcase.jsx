import { useEffect, useRef } from "react";
import NatureParticles from "./NatureParticles";

const PANELS = [
  {
    id: "pure-aura",
    kicker: "Odour Protection, Reinvented",
    name: "PURE AURA",
    tagline: "100% Natural Deodorant",
    bold: "Crafted with Prebiotic Inulin, Bisabolol, and a soft jasmine-eucalyptus accord.",
    body: "Pure Aura works with your body — not against it. No aluminium, no pore-blocking. Just confident, lasting freshness from the first application.",
    cta: "Shop Pure Aura",
    href: "#products",
    product: "/assets/deodorant-premium-solo.png",
    productAlt: "Pure Aura natural deodorant",
    theme: "light" /* cream bg, dark text */,
    productSide: "left",
    float: "float-slow",
    accent: "#6b6b4c" /* olive */,
    glow: "radial-gradient(ellipse 55% 70% at 42% 52%, rgba(107,107,76,0.13) 0%, transparent 70%)",
  },
  {
    id: "calm-pure",
    kicker: "Find your calm. Restore your balance.",
    name: "CALM PURE",
    tagline: "100% Natural Face Cleanser",
    bold: "A pH-balanced formula of Chamomile, Aloe vera, and micro-fine plant cellulose.",
    body: "Developed with pharmaceutical precision for sensitive skin. Gentle enough for daily use, effective enough to actually matter.",
    cta: "Shop Calm Pure",
    href: "#products",
    product: "/assets/face-wash-nobg.png",
    productAlt: "Calm Pure face cleanser",
    theme: "dark" /* rich earth bg, light text */,
    productSide: "right",
    float: "float-medium",
    accent: "#f5d5bb" /* skin */,
    glow: "radial-gradient(ellipse 50% 65% at 58% 50%, rgba(245,213,187,0.12) 0%, transparent 65%)",
  },
  {
    id: "collection",
    kicker: "Al-Amar Naturals",
    name: "THE RITUAL",
    tagline: "Your complete daily collection",
    bold: "Two products. One philosophy.",
    body: "Luxury earned through science, not promised through marketing. Every ingredient chosen for a reason. Made in Italy.",
    cta: "View All Products",
    href: "#products",
    product: "/assets/scene-collection.png",
    productAlt: "Al-Amar Naturals full collection flat lay",
    theme: "rose",
    productSide: "left",
    float: "float-slow",
    framed: true /* has its own background — display as framed photo */,
    accent: "#ffffff",
    glow: "radial-gradient(ellipse 55% 70% at 45% 50%, rgba(255,255,255,0.18) 0%, transparent 70%)",
  },
];

const THEME = {
  light: {
    bg: "#fbefe3",
    text: "#604f3f",
    sub: "#6b6b4c",
    border: "rgba(96,79,63,0.25)",
    ctaBg: "transparent",
    ctaHover: "#604f3f",
    ctaHoverText: "#fbefe3",
  },
  dark: {
    bg: "#3a2d24",
    text: "#f5d5bb",
    sub: "rgba(245,213,187,0.55)",
    border: "rgba(245,213,187,0.3)",
    ctaBg: "transparent",
    ctaHover: "#f5d5bb",
    ctaHoverText: "#3a2d24",
  },
  rose: {
    bg: "#b87f6a",
    text: "#ffffff",
    sub: "rgba(255,255,255,0.65)",
    border: "rgba(255,255,255,0.4)",
    ctaBg: "transparent",
    ctaHover: "#ffffff",
    ctaHoverText: "#b87f6a",
  },
};

const ProductPanel = ({ panel, index }) => {
  const ref = useRef(null);
  const t = THEME[panel.theme];
  const isLeft = panel.productSide === "left";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("panel-in");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="panel"
      style={{ background: t.bg, color: t.text }}
    >
      {/* Cinematic Studio Lighting & Fluid Background */}
      <div className="panel-liquid" />
      <div className="panel-rays" />

      {/* Decorative botanical element pinned for editorial feel */}
      <div className="panel-botanical" />

      {/* Radial glow behind the product */}
      <div
        className="panel-glow"
        style={{ background: panel.glow }}
      />

      {/* Giant decorative background word */}
      <span
        className="panel-deco"
        style={{ color: panel.accent }}
      >
        {panel.id === "pure-aura"
          ? "NATURAL"
          : panel.id === "calm-pure"
            ? "BALANCE"
            : "RITUAL"}
      </span>

      {/* Product image col */}
      <div className={`panel-img-col ${isLeft ? "order-first" : "order-last"}`}>
        <div className="panel-tilt-wrap">
          {/* Sun glint flare */}
          <div className="panel-flare" />

          <img
            src={panel.product}
            alt={panel.productAlt}
            className={`${panel.framed ? "panel-img-framed" : `panel-img ${panel.float}`}`}
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Rim light effect */}
          <div className="panel-rim" />
        </div>
      </div>

      {/* Text col */}
      <div className={`panel-content ${isLeft ? "order-last" : "order-first"}`}>
        {/* Accent bar */}
        <span
          className="panel-accent"
          style={{ background: panel.accent }}
        />
        <span
          className="panel-kicker"
          style={{ color: t.sub }}
        >
          {panel.kicker}
        </span>
        <h2 className="panel-name">{panel.name}</h2>
        <span
          className="panel-tagline"
          style={{ color: t.sub }}
        >
          {panel.tagline}
        </span>

        <p
          className="panel-body"
          style={{ color: t.text }}
        >
          <strong>{panel.bold}</strong> {panel.body}
        </p>

        <a
          href={panel.href}
          className="panel-cta"
          style={{ borderColor: t.border, color: t.text }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = t.ctaHover;
            e.currentTarget.style.color = t.ctaHoverText;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = t.text;
          }}
        >
          {panel.cta}
        </a>
      </div>
    </article>
  );
};

const ProductShowcase = () => (
  <section
    className="panel-section"
    id="products"
  >
    {PANELS.map((panel, i) => (
      <ProductPanel
        key={panel.id}
        panel={panel}
        index={i}
      />
    ))}
  </section>
);

export default ProductShowcase;
