import { useEffect, useState } from "react";
import { HERO_ASSETS } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        hasScrolled ? "site-header site-header-scrolled" : "site-header"
      }
    >
      <a
        href="#products"
        className="announcement-bar"
      >
        Free Delivery for a Limited Time — Treat Yourself Today!
        <span
          className="announcement-arrow"
          aria-hidden="true"
        >
          ›
        </span>
      </a>

      <div className="nav-shell">
        {/* Left: Nav links with mega menus */}
        <div className="nav-primary">
          <nav
            className="nav-links"
            aria-label="Primary navigation"
          >
            {/* SHOP mega menu */}
            <div className="nav-menu-item">
              <a
                href="#products"
                className="nav-link nav-link-chevron"
              >
                Shop{" "}
                <span
                  className="chevron-icon"
                  aria-hidden="true"
                >
                  ∨
                </span>
              </a>
              <div className="mega-menu mega-shop">
                <div className="mega-columns">
                  <div className="mega-col">
                    <span className="mega-col-heading">Natural Essentials</span>
                    <span className="mega-col-kicker">Botanical</span>
                    <ul className="mega-link-list">
                      <li>
                        <a
                          href="#products"
                          className="mega-link"
                        >
                          Pure Aura Deodorant
                        </a>
                      </li>
                      <li>
                        <a
                          href="#products"
                          className="mega-link"
                        >
                          Calm Pure Cleanser
                        </a>
                      </li>
                      <li>
                        <a
                          href="#products"
                          className="mega-link"
                        >
                          Daily Ritual Bundle
                        </a>
                      </li>
                      <li>
                        <a
                          href="#products"
                          className="mega-link"
                        >
                          View All
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <span className="mega-col-heading">Formula Focus</span>
                    <ul className="mega-link-list">
                      <li>
                        <a
                          href="#products"
                          className="mega-link"
                        >
                          Natural Deodorant
                        </a>
                      </li>
                      <li>
                        <a
                          href="#products"
                          className="mega-link"
                        >
                          Face Cleanser
                        </a>
                      </li>
                      <li>
                        <a
                          href="#journal"
                          className="mega-link"
                        >
                          Skin Barrier Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#journal"
                          className="mega-link"
                        >
                          pH Balanced Care
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <span className="mega-col-heading">
                      How Do You Want To Feel?
                    </span>
                    <ul className="mega-link-list">
                      <li>
                        <a
                          href="#journal"
                          className="mega-link"
                        >
                          Confident &amp; Protected
                        </a>
                      </li>
                      <li>
                        <a
                          href="#journal"
                          className="mega-link"
                        >
                          Balanced &amp; Clear
                        </a>
                      </li>
                      <li>
                        <a
                          href="#journal"
                          className="mega-link"
                        >
                          Natural &amp; Effective
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mega-image-col">
                  <img
                    src="/assets/article2.png"
                    alt="Al-Amar natural skincare"
                    className="mega-img"
                  />
                </div>
              </div>
            </div>

            {/* WELLBEING CONCERN mega menu */}
            <div className="nav-menu-item">
              <a
                href="#journal"
                className="nav-link nav-link-chevron"
              >
                Wellbeing Concern{" "}
                <span
                  className="chevron-icon"
                  aria-hidden="true"
                >
                  ∨
                </span>
              </a>
              <div className="mega-menu mega-concern">
                <div className="mega-concern-items">
                  <a
                    href="#products"
                    className="concern-card"
                  >
                    <span
                      className="concern-icon"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 48 48"
                        className="concern-svg"
                      >
                        {/* Crescent moon — freshness / odor control */}
                        <path
                          d="M30 10C22 10 16 16 16 24C16 32 22 38 30 38C26 36 22 30 22 24C22 18 26 12 30 10Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="36"
                          cy="14"
                          r="2"
                          fill="currentColor"
                        />
                        <circle
                          cx="34"
                          cy="34"
                          r="1.5"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="concern-title">Odor Control</span>
                    <span className="concern-cta">Shop Now</span>
                  </a>

                  <a
                    href="#products"
                    className="concern-card"
                  >
                    <span
                      className="concern-icon"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 48 48"
                        className="concern-svg"
                      >
                        {/* Water drop — sensitive skin / calm */}
                        <path
                          d="M24 8C24 8 12 22 12 30C12 37.18 17.373 43 24 43C30.627 43 36 37.18 36 30C36 22 24 8 24 8Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 32C18 35.314 20.686 38 24 38"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="concern-title">Sensitive Skin</span>
                    <span className="concern-cta">Shop Now</span>
                  </a>

                  <a
                    href="#journal"
                    className="concern-card"
                  >
                    <span
                      className="concern-icon"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 48 48"
                        className="concern-svg"
                      >
                        {/* Spiral leaf — balance / energy */}
                        <path
                          d="M24 38C24 38 10 32 10 20C10 14 16 10 22 12C20 16 20 22 24 26C28 22 30 16 28 12C34 10 40 14 40 20C40 32 24 38 24 38Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24 26V38"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="concern-title">Daily Balance</span>
                    <span className="concern-cta">Shop Now</span>
                  </a>
                </div>
                <div className="mega-image-col">
                  <img
                    src="/assets/article3.png"
                    alt="Al-Amar wellbeing rituals"
                    className="mega-img"
                  />
                </div>
              </div>
            </div>

            <a
              href="#science"
              className="nav-link"
            >
              Our Story
            </a>
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            <span
              className={
                isOpen
                  ? "menu-line menu-line-top menu-line-top-open"
                  : "menu-line menu-line-top"
              }
            />
            <span
              className={
                isOpen
                  ? "menu-line menu-line-middle menu-line-middle-open"
                  : "menu-line menu-line-middle"
              }
            />
            <span
              className={
                isOpen
                  ? "menu-line menu-line-bottom menu-line-bottom-open"
                  : "menu-line menu-line-bottom"
              }
            />
          </button>
        </div>

        {/* Center: Brand logo — expanded at top, compact on scroll */}
        <div className="nav-brand">
          <a
            href="/"
            className="nav-brand-link"
            aria-label="Al-Amar Naturals homepage"
          >
            {/* Decorative flanking lines — visible only when not scrolled */}
            <span
              className={`nav-brand-ornament ${hasScrolled ? "nav-brand-ornament-hidden" : ""}`}
              aria-hidden="true"
            >
              <span className="ornament-line" />
              <span className="ornament-diamond">◆</span>
            </span>

            {/* Logo image — grows/shrinks with scroll */}
            <span className="nav-logo-wrap">
              <img
                src={HERO_ASSETS.logo}
                alt="Al-Amar Naturals"
                className={`nav-logo ${hasScrolled ? "nav-logo-scrolled" : "nav-logo-expanded"}`}
              />
              {/* Tagline beneath logo — fades out on scroll */}
              <span
                className={`nav-brand-tagline ${hasScrolled ? "nav-brand-tagline-hidden" : ""}`}
              >
                Est. 2024 &nbsp;·&nbsp; Made in Italy
              </span>
            </span>

            <span
              className={`nav-brand-ornament nav-brand-ornament-right ${hasScrolled ? "nav-brand-ornament-hidden" : ""}`}
              aria-hidden="true"
            >
              <span className="ornament-diamond">◆</span>
              <span className="ornament-line" />
            </span>
          </a>
        </div>

        {/* Right: Icons */}
        <div className="nav-actions">
          <button
            className="nav-icon-button"
            aria-label="Search"
            type="button"
          >
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.45}
                d="M21 21l-5.2-5.2m2-5.2a7.2 7.2 0 11-14.4 0 7.2 7.2 0 0114.4 0z"
              />
            </svg>
          </button>
          <button
            className="nav-icon-button nav-account-button"
            aria-label="Account"
            type="button"
          >
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <button
            className="nav-icon-button"
            aria-label="Cart"
            type="button"
          >
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={isOpen ? "mobile-menu mobile-menu-open" : "mobile-menu"}>
        <span className="mobile-menu-title">Menu</span>
        <nav
          className="mobile-menu-links"
          aria-label="Mobile navigation"
        >
          <a
            href="#products"
            className="mobile-menu-link"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </a>
          <a
            href="#journal"
            className="mobile-menu-link"
            onClick={() => setIsOpen(false)}
          >
            Wellbeing Concern
          </a>
          <a
            href="#science"
            className="mobile-menu-link"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
