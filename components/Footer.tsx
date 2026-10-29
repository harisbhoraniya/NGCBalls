import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Infrastructure", href: "/infrastructure" },
  // { label: "Global Presence", href: "/global-presence" },
];

const products = [
  { label: "Balls", href: "/products/balls/" },
  // { label: "Metallic Balls", href: "/products/balls/metallic-balls/" },
  // { label: "Non-Metallic Balls", href: "/products/balls/non-metallic-balls/" },
  { label: "Rollers", href: "/products/rollers/" },
  { label: "Grinding Media", href: "/products/grinding-media/" },
  { label: "Ball Valve Components", href: "/products/ball-valve-component/" },
  // { label: "Machine Components", href: "/products/machine-component/" },
];

interface ContactItem {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  content: React.ReactNode;
  href?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: FiPhone,
    content: <span style={{ fontSize: "0.875rem", color: "var(--grey-light)" }}>+91-22-68380200 (100 Lines)</span>,
    href: "tel:+912268380200",
  },

  {
    icon: FiMail,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <a
          href="mailto:enquirybr@ngandhi.com"
          className="contact-email-link"
        >
          enquirybr@ngandhi.com
          <FiArrowUpRight size={11} style={{ opacity: 0.5 }} />
        </a>
        <a
          href="mailto:enquirymatl@ngandhi.com"
          className="contact-email-link"
        >
          enquirymatl@ngandhi.com
          <FiArrowUpRight size={11} style={{ opacity: 0.5 }} />
        </a>
      </div>
    ),
  },
  {
    icon: FiMapPin,
    content: (
      <span style={{ fontSize: "0.875rem", color: "var(--grey-light)", lineHeight: 1.65 }}>
        104,1st Floor,<br />
        C Wing ,Marathon Futurex,<br />
        N M Joshi Marg,<br />
        Lower Parel (E),<br />
        Mumbai - 400013,<br />
        Maharashtra, India.<br />
        ISO 9001:2015 Certified
      </span>
    ),
    href: "https://www.google.com/maps/search/?api=1&query=Marathon+Futurex+N+M+Joshi+Marg+Lower+Parel+Mumbai+400013",
  },
];

/* ── Reusable footer section heading ──────────────────────── */
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#CC5508",
        marginBottom: "20px",
      }}
    >
      {children}
    </h4>
  );
}

/* ── Animated footer link ─────────────────────────────────── */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        style={{ display: "inline-flex", alignItems: "center", gap: 0, textDecoration: "none" }}
        className="footer-link-item"
      >
        {/* The sliding dash is pure CSS, defined below in the <style> block */}
        <span className="footer-link-dash" />
        <span style={{ fontSize: "0.875rem", color: "var(--grey-light)", transition: "color 0.2s ease" }}>
          {children}
        </span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <>
      {/* Scoped styles for footer link hover animation */}
      <style>{`
        .footer-link-item { position: relative; }
        .footer-link-dash {
          display: block;
          width: 0;
          height: 1.5px;
          background: var(--orange);
          border-radius: 2px;
          margin-right: 0;
          flex-shrink: 0;
          transition: width 0.22s ease, margin-right 0.22s ease;
        }
        .footer-link-item:hover .footer-link-dash { width: 10px; margin-right: 6px; }
        .footer-link-item:hover span { color: var(--orange) !important; }

        .contact-icon-wrap {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(232,101,10,0.06);
          border: 1px solid rgba(232,101,10,0.12);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.22s ease;
        }
        .contact-row:hover .contact-icon-wrap {
          background: var(--orange);
          border-color: var(--orange);
        }
        .contact-row:hover .contact-icon-wrap svg { color: #fff !important; }
        .contact-row:hover span { color: var(--orange) !important; }

        .contact-email-link {
          font-size: 0.85rem;
          color: var(--grey-light);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease;
        }
        .contact-email-link:hover {
          color: var(--orange) !important;
        }

        .social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.09);
          display: flex; align-items: center; justify-content: center;
          color: var(--grey-mid);
          transition: all 0.22s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          text-decoration: none;
        }
        .social-btn:hover {
          background: var(--orange);
          border-color: var(--orange);
          color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(232,101,10,0.3);
        }
      `}</style>

      <footer style={{ background: "var(--grey-subtle)", borderTop: "1px solid rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}>

        {/* Subtle dot grid texture */}
        <div
          style={{
            position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>

          {/* ── Main grid ────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
              paddingTop: "4rem",
              paddingBottom: "3rem",
            }}
          >

            {/* Brand */}
            <div style={{ maxWidth: "260px" }}>
              {/* 👉 Replace with <Image /> */}
              <Link href="/" style={{ display: "inline-block", marginBottom: "20px" }}>
                <Image
                  src="/images/logo.png"
                  alt="N Gandhi & Co"
                  width={148}
                  height={40}
                  priority
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Link>

              <p style={{ fontSize: "0.875rem", color: "var(--grey-light)", lineHeight: 1.75, marginBottom: "24px" }}>
                Precision Metallic & Non-Metallic Balls & Rollers trusted by global
                manufacturers since 1991.
              </p>

              {/* Social */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <FaLinkedinIn size={14} />
                </a>
              </div>

              {/* ISO badge */}
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "6px 12px",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "100px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <HiShieldCheck size={14} style={{ color: "var(--orange)", flexShrink: 0 }} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--grey-mid)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <FooterHeading>Navigation</FooterHeading>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {navLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <FooterHeading>Products</FooterHeading>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {products.map((item) => (
                  <FooterLink key={item.href} href={item.href}>{item.label}</FooterLink>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <FooterHeading>Contact</FooterHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {contactItems.map(({ icon: Icon, content, href }, i) => {
                  const inner = (
                    <div
                      className="contact-row"
                      style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: href ? "pointer" : "default" }}
                    >
                      <div className="contact-icon-wrap">
                        <Icon size={13} style={{ color: "var(--orange)", transition: "color 0.2s ease" }} />
                      </div>
                      <div style={{ paddingTop: "4px" }}>{content}</div>
                    </div>
                  );

                  return href ? (
                    <a
                      key={i}
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{ textDecoration: "none" }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={i}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ───────────────────────────────── */}
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.06)",
              padding: "24px 0",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "#AAAAAA", margin: 0 }}>
              © {new Date().getFullYear()} N Gandhi &amp; Co. All rights reserved.
            </p>

            <Link
              href="/contact"
              className="btn-secondary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
            >
              Enquire Now
              <FiArrowRight size={13} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}