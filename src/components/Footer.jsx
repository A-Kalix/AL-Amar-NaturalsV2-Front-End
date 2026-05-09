import { FOOTER_GROUPS } from "@/constants";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <h2 className="footer-about-title">About Us</h2>
        <p className="footer-description">
          Al-Amar Naturals is a wellbeing brand offering natural products rooted
          in botanical care and professional formulation. With a focus on
          purity, simplicity, and mindful living, we bring together nature and
          science to create meaningful moments of clarity and balance.
        </p>
        <div
          className="footer-socials"
          aria-label="Social links"
        >
          <a
            href="#"
            className="footer-social-link"
          >
            f
          </a>
          <a
            href="#"
            className="footer-social-link"
          >
            ig
          </a>
          <a
            href="#"
            className="footer-social-link"
          >
            p
          </a>
          <a
            href="#"
            className="footer-social-link"
          >
            t
          </a>
        </div>
      </div>

      <div className="footer-accordion-list">
        {FOOTER_GROUPS.map((group) => (
          <nav
            key={group.title}
            className="footer-nav-row"
            aria-label={group.title}
          >
            <h3 className="footer-heading">{group.title}</h3>
            <span
              className="footer-plus"
              aria-hidden="true"
            >
              +
            </span>
            <ul className="footer-link-list">
              {group.links.map((link) => (
                <li
                  key={link.label}
                  className="footer-link-item"
                >
                  <a
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="footer-legal">
          © 2026 Al-Amar Naturals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
