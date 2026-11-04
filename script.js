    /* CIP Innovation & Incubation Hub — shared stylesheet for every page */

:root {
  --navy: #102744;
  --navy-deep: #091b31;
  --teal: #129d9b;
  --teal-dark: #087f80;
  --mint: #7de0d0;
  --ink: #1b2b40;
  --muted: #68788c;
  --pale: #f3f7fa;
  --line: #e3ebf0;
  --white: #fff;
  --shadow: 0 18px 50px rgba(13,38,65,.10);
}


/* GLOBAL */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system,
    "Segoe UI", Arial, sans-serif;
  color: var(--ink);
  line-height: 1.65;
  background: #fff;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}

.container {
  width: min(1160px, calc(100% - 48px));
  margin-inline: auto;
}

/* Colour emoji icons (keeps them colourful, not monochrome) */
.emoji {
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
  font-style: normal;
  line-height: 1;
}


/* HEADER AND NAVIGATION */

.site-header {
  min-height: 82px;
  background: rgba(255,255,255,.97);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 22px rgba(10,31,53,.07);
  backdrop-filter: blur(12px);
}

.nav-wrap {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  flex-direction: column;
  line-height: 1;
  flex-shrink: 0;
  color: var(--navy);
}

.brand-mark {
  font-size: 29px;
  font-weight: 850;
  letter-spacing: 2px;
}

.brand-sub {
  font-size: 9px;
  letter-spacing: 1.35px;
  font-weight: 850;
  color: var(--teal);
  margin-top: 5px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.8vw, 24px);
}

.main-nav a {
  font-size: 13px;
  font-weight: 700;
  color: #33445a;
  white-space: nowrap;
  transition: color .2s;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--teal-dark);
}

/* "SUBMIT YOUR IDEA" BUTTON IN THE NAV */

.main-nav a.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  background: var(--teal);
  border-radius: 25px;
  color: #fff;
  font-weight: 800;
  box-shadow: 0 7px 16px rgba(18,157,155,.22);
  transition: background .2s, transform .2s;
}

.main-nav a.nav-cta:hover,
.main-nav a.nav-cta.active {
  background: var(--teal-dark);
  color: #fff;
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 7px;
  padding: 8px 11px;
  color: var(--navy);
  font-size: 20px;
  cursor: pointer;
}


/* HERO SLIDESHOW */

.hero {
  height: min(680px, calc(100vh - 82px));
  min-height: 560px;
  position: relative;
  overflow: hidden;
  background: var(--navy-deep);
  color: #fff;
}

.hero-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  background-image: var(--hero-image);
  background-size: cover;
  background-position: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity .75s ease, visibility .75s ease;
}

.hero-slide.active {
  opacity: 1;
  visibility: visible;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(5,22,42,.94) 0%,
    rgba(5,22,42,.78) 48%,
    rgba(5,22,42,.18) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-bottom: 60px;
}

.eyebrow {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 850;
  color: var(--teal-dark);
  text-transform: uppercase;
}

.eyebrow-light {
  color: var(--mint);
}

.hero h1,
.inner-hero h1 {
  font-size: clamp(42px, 5.3vw, 68px);
  line-height: 1.08;
  letter-spacing: -1.8px;
  max-width: 790px;
  margin: 19px 0 20px;
  font-weight: 820;
}

.inner-hero h1 {
  font-size: clamp(36px, 4.6vw, 56px);
}

.hero h1 span,
.inner-hero h1 span {
  display: block;
  color: var(--mint);
}

.hero-content p,
.inner-hero p {
  font-size: 17px;
  line-height: 1.75;
  color: #e2eaf1;
  max-width: 650px;
  margin-bottom: 29px;
}


/* BUTTONS */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 0;
  border-radius: 6px;
  padding: 14px 21px;
  font-size: 13px;
  font-weight: 800;
  transition: transform .2s, background .2s, box-shadow .2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--teal);
  color: #fff;
  box-shadow: 0 9px 22px rgba(18,157,155,.2);
}

.btn-primary:hover {
  background: var(--teal-dark);
}

.btn-white {
  background: #fff;
  color: var(--navy);
}


/* SLIDESHOW NAVIGATION: ‹ 1 2 3 › */

.hero-controls {
  position: absolute;
  z-index: 5;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
}

.slide-dot,
.slide-arrow {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.85);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  transition: background .25s, color .25s, border-color .25s, transform .25s;
}

.slide-dot {
  background: transparent;
  font-size: 15px;
  font-weight: 800;
}

.slide-dot:hover,
.slide-dot.active {
  background: #fff;
  border-color: #fff;
  color: var(--navy);
  transform: translateY(-2px);
}

.slide-arrow {
  background: var(--teal);
  border-color: var(--teal);
  font-size: 30px;
  line-height: 1;
  padding-bottom: 4px;
  box-shadow: 0 6px 16px rgba(0,0,0,.25);
}

.slide-arrow:hover {
  background: var(--teal-dark);
  border-color: var(--teal-dark);
  transform: translateY(-2px);
}

.slide-dot:focus-visible,
.slide-arrow:focus-visible,
.menu-toggle:focus-visible,
a:focus-visible {
  outline: 3px solid var(--mint);
  outline-offset: 3px;
}

.hero-bottom {
  position: absolute;
  right: max(24px, calc((100vw - 1160px)/2));
  bottom: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #e0e9f1;
  font-size: 9px;
  letter-spacing: 1.8px;
  font-weight: 800;
}

.hero-bottom i {
  height: 4px;
  width: 4px;
  background: var(--mint);
  border-radius: 50%;
}


/* GENERAL SECTIONS */

.section {
  padding: 88px 0;
}

.section-light {
  background: #fff;
}

.section-tint {
  background: var(--pale);
}

.section-heading {
  max-width: 790px;
  margin: 0 auto 42px;
  text-align: center;
}

.section-heading h2,
.idea-copy h2,
.two-column h2 {
  font-size: clamp(30px, 3.5vw, 43px);
  line-height: 1.15;
  letter-spacing: -.8px;
  color: var(--navy);
  margin: 12px 0 16px;
}

.section-heading p {
  font-size: 15px;
  color: var(--muted);
  max-width: 760px;
  margin: auto;
}


/* BENEFIT CARDS */

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 17px;
}

.benefit-card {
  position: relative;
  padding: 27px 23px 25px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  min-height: 275px;
  transition: transform .25s, box-shadow .25s, border-color .25s;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: #b6dedd;
}

.benefit-icon {
  height: 56px;
  width: 56px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 28px;
  margin-bottom: 22px;
}

.icon-blue   { background: #e5f1ff; }
.icon-purple { background: #f0eaff; }
.icon-orange { background: #fff0e2; }
.icon-green  { background: #e4f8ed; }

.card-index {
  font-size: 9px;
  letter-spacing: 1.2px;
  color: #8a98a8;
  font-weight: 850;
}

.benefit-card h3 {
  font-size: 18px;
  line-height: 1.32;
  color: var(--navy);
  margin: 10px 0;
}

.benefit-card p {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.75;
}

.disclaimer {
  font-size: 11px;
  color: #8491a0;
  text-align: center;
  max-width: 850px;
  margin: 25px auto 0;
}


/* SUBMIT IDEA SECTION */

.idea-layout {
  display: grid;
  grid-template-columns: 1.03fr .97fr;
  align-items: center;
  gap: 64px;
}

.idea-copy h2 span {
  color: var(--teal);
}

.idea-copy > p,
.two-column > div > p {
  color: var(--muted);
  font-size: 15px;
  max-width: 610px;
  margin-bottom: 24px;
}

.mini-points {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 23px;
}

.mini-points span {
  font-size: 11px;
  color: #53677b;
  font-weight: 700;
}

.mini-points span:first-letter {
  color: var(--teal);
}


/* FUNDING CARD — the whole card is one link to the Submit Idea page */

.funding-card {
  display: block;
  overflow: hidden;
  border-radius: 13px;
  background: var(--navy);
  color: #fff;
  box-shadow: 0 20px 45px rgba(16,39,68,.18);
  cursor: pointer;
  transition: transform .25s, box-shadow .25s;
}

.funding-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 26px 55px rgba(16,39,68,.28);
}

.funding-top {
  padding: 29px 31px 20px;
  background: linear-gradient(135deg, #163a5c, #102744);
}

.funding-top h3 {
  font-size: 23px;
  line-height: 1.2;
  margin: 10px 0 7px;
}

.funding-top p {
  font-size: 13px;
  color: #cfdae5;
}

.funding-amounts {
  padding: 4px 20px 0;
}

.funding-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: var(--navy);
  padding: 22px 24px;
  margin: 12px 0;
  border-radius: 10px;
}

.funding-row small {
  display: block;
  font-size: 9px;
  letter-spacing: 1.1px;
  font-weight: 850;
  color: #8290a0;
}

.funding-row strong {
  display: block;
  font-size: 25px;
  line-height: 1.35;
  color: var(--teal-dark);
  margin-top: 2px;
}

.funding-arrow {
  font-size: 23px;
  color: var(--teal);
  transition: transform .25s;
}

.funding-card:hover .funding-arrow {
  transform: translate(3px, -3px);
}

.funding-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 20px 0;
  padding: 14px 4px;
  border-top: 1px solid rgba(255,255,255,.12);
  color: var(--mint);
  font-size: 13px;
  font-weight: 800;
}

.funding-cta b {
  transition: transform .25s;
}

.funding-card:hover .funding-cta b {
  transform: translateX(4px);
}

.funding-note {
  font-size: 10px;
  line-height: 1.6;
  color: #c4d2df;
  padding: 4px 31px 25px;
}


/* PRODUCT CALLOUT */

.product-callout {
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 27px;
  border: 1px solid #dce9ed;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(13,38,65,.04);
  transition: box-shadow .2s, transform .2s;
}

.product-callout:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.callout-icon {
  height: 52px;
  width: 52px;
  flex: 0 0 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #e7f7f5;
  font-size: 25px;
}

.callout-copy {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.callout-copy small {
  font-size: 9px;
  font-weight: 850;
  letter-spacing: 1.4px;
  color: var(--teal-dark);
}

.callout-copy strong {
  font-size: 18px;
  color: var(--navy);
  margin: 3px 0;
}

.callout-copy em {
  font-size: 12px;
  font-style: normal;
  color: var(--muted);
}

.callout-link {
  white-space: nowrap;
  color: var(--teal-dark);
  font-size: 12px;
  font-weight: 850;
}


/* OUR HELP SECTION */

.support-section {
  background: var(--navy);
  color: #fff;
  position: relative;
  overflow: hidden;
}

.support-section:before {
  content: "";
  position: absolute;
  width: 480px;
  height: 480px;
  border: 1px solid rgba(125,224,208,.12);
  border-radius: 50%;
  right: -180px;
  top: -230px;
  box-shadow:
    0 0 0 55px rgba(125,224,208,.025),
    0 0 0 110px rgba(125,224,208,.02);
}

.section-heading-dark {
  position: relative;
  z-index: 1;
}

.section-heading-dark h2 {
  color: #fff;
}

.section-heading-dark p {
  color: #c5d2df;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  position: relative;
  z-index: 1;
}

.support-item {
  position: relative;
  background: #fff;
  color: var(--ink);
  border-radius: 9px;
  padding: 26px 22px 24px;
  min-height: 250px;
}

.support-number {
  font-size: 10px;
  letter-spacing: 1px;
  color: #9ba9b8;
  font-weight: 850;
}

.support-symbol {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 27px;
  margin: 15px 0 14px;
}

.support-blue   { background: #e5f1ff; }
.support-purple { background: #f0eaff; }
.support-orange { background: #fff0e2; }
.support-green  { background: #e4f8ed; }

.support-item h3 {
  font-size: 17px;
  line-height: 1.3;
  color: var(--navy);
  margin-bottom: 9px;
}

.support-item p {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.7;
}

.support-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 31px;
  position: relative;
  z-index: 1;
}

.support-footer p {
  color: #dce6ee;
  font-size: 14px;
}

.support-footer p strong {
  color: #fff;
}


/* FOOTER */

.site-footer {
  background: var(--navy-deep);
  color: #fff;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 50px;
  padding: 48px 0;
}

.brand-footer {
  color: #fff;
  width: max-content;
}

.brand-footer .brand-mark {
  color: #fff;
}

.footer-main > div:first-child p {
  font-size: 12px;
  color: #aebdcb;
  max-width: 380px;
  margin-top: 15px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
}

.footer-nav strong {
  font-size: 12px;
  color: #fff;
  margin-bottom: 5px;
}

.footer-nav a {
  font-size: 12px;
  color: #b9c7d4;
}

.footer-nav a:hover {
  color: var(--mint);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.1);
  padding: 15px 0;
  color: #8fa1b3;
  font-size: 10px;
}


/* INNER PAGE HERO (About, Submit Idea, Projects) */

.inner-hero {
  background:
    linear-gradient(90deg, rgba(5,22,42,.94), rgba(5,22,42,.66)),
    url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85")
    center/cover;
  color: #fff;
  padding: 95px 0 100px;
}

.about-hero {
  background-image:
    linear-gradient(90deg, rgba(5,22,42,.94), rgba(5,22,42,.66)),
    url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85");
}

.projects-hero {
  background-image:
    linear-gradient(90deg, rgba(5,22,42,.94), rgba(5,22,42,.66)),
    url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85");
}


/* SUBMIT IDEA PAGE */

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.process-grid article {
  padding: 26px 22px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #fff;
  transition: transform .25s, box-shadow .25s;
}

.process-grid article:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.process-grid article > span {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background: #e8f7f5;
  color: var(--teal-dark);
  font-weight: 850;
  border-radius: 50%;
  font-size: 12px;
}

.process-grid h3 {
  font-size: 17px;
  color: var(--navy);
  margin: 17px 0 8px;
}

.process-grid p {
  font-size: 13px;
  color: var(--muted);
}

.two-column {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 65px;
  align-items: center;
}

.guidance-panel {
  background: var(--navy);
  border-radius: 12px;
  padding: 37px;
  color: #fff;
  box-shadow: var(--shadow);
}

.panel-icon {
  font-size: 36px;
}

.guidance-panel h3 {
  font-size: 25px;
  line-height: 1.2;
  margin: 13px 0;
}

.guidance-panel p {
  font-size: 13px;
  color: #cfdae5;
  margin-bottom: 23px;
}

.funding-section {
  background: var(--navy);
  color: #fff;
}

.funding-section .section-heading h2 {
  color: #fff;
}

.funding-section .section-heading p {
  color: #c5d2df;
}

.funding-grid {
  max-width: 850px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.funding-grid article {
  padding: 31px 25px;
  background: #fff;
  color: var(--navy);
  text-align: center;
  border-radius: 10px;
}

.funding-grid article.featured {
  outline: 3px solid var(--mint);
  outline-offset: -3px;
}

.funding-grid small {
  display: block;
  color: var(--teal-dark);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: 1.2px;
}

.funding-grid strong {
  display: block;
  font-size: clamp(32px, 4vw, 45px);
  margin: 8px 0;
}

.funding-grid p {
  font-size: 12px;
  color: var(--muted);
}

.funding-disclaimer {
  text-align: center;
  font-size: 11px;
  color: #c5d2df;
  margin: 20px auto 0;
}


/* ABOUT PAGE — TEAM */

.team-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  align-items: stretch;
}

.profile-link {
  display: block;
  height: 100%;
  border-radius: 14px;
}

.profile-card {
  height: 100%;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 34px 30px;
  text-align: center;
  transition: transform .25s, box-shadow .25s, border-color .25s;
}

.profile-link:hover .profile-card {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: #b6dedd;
}

.profile-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 20px;
  border: 4px solid var(--teal);
  background: var(--pale);
}

.profile-card h2 {
  font-size: 24px;
  color: var(--navy);
  margin-bottom: 4px;
}

.profile-role {
  color: var(--teal-dark);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .5px;
  margin-bottom: 16px;
}

.profile-card h3 {
  font-size: 16px;
  color: var(--navy);
  margin-bottom: 6px;
}

.profile-description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 18px;
}

.quote-box {
  text-align: left;
  background: var(--pale);
  border-left: 4px solid var(--teal);
  padding: 18px 20px;
  border-radius: 8px;
  margin: 10px 0 24px;
  color: #3f5166;
  font-style: italic;
  font-size: 14px;
  line-height: 1.85;
}

.quote-author {
  color: var(--teal-dark);
  font-weight: 800;
  text-align: right;
  margin-top: 10px;
  font-style: normal;
}

.credentials {
  text-align: left;
}

.credentials h3 {
  font-size: 17px;
  margin-bottom: 8px;
}

.credentials ul {
  list-style: none;
}

.credentials li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  color: #44566b;
  font-size: 14px;
}

.credentials li::before {
  content: "✓";
  flex: 0 0 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f7f5;
  color: var(--teal-dark);
  font-size: 12px;
  font-weight: 900;
}

.profile-linkedin {
  display: inline-block;
  margin-top: 18px;
  color: var(--teal-dark);
  font-size: 13px;
  font-weight: 850;
}


/* PROJECTS PAGE */

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.project-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(13,38,65,.05);
}

.project-image {
  height: 190px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 17px;
}

.project-image span {
  font-size: 9px;
  font-weight: 850;
  letter-spacing: 1.3px;
  color: #fff;
  text-shadow: 0 2px 8px #000;
}

.project-image-one {
  background-image:
    linear-gradient(0deg, rgba(5,22,42,.55), transparent),
    url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80");
}

.project-image-two {
  background-image:
    linear-gradient(0deg, rgba(5,22,42,.55), transparent),
    url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80");
}

.project-image-three {
  background-image:
    linear-gradient(0deg, rgba(5,22,42,.55), transparent),
    url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80");
}

.project-content {
  padding: 22px;
}

.project-content small {
  font-size: 9px;
  letter-spacing: 1.1px;
  color: var(--teal-dark);
  font-weight: 850;
  text-transform: uppercase;
}

.project-content h3 {
  font-size: 19px;
  color: var(--navy);
  margin: 7px 0;
}

.project-content p {
  font-size: 13px;
  color: var(--muted);
}

.project-status {
  display: block;
  margin-top: 17px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  font-size: 10px;
  color: #8996a4;
}

.notice {
  margin-top: 26px;
  padding: 17px 20px;
  border-radius: 8px;
  border: 1px solid #eedcae;
  background: #fff9e9;
  color: #6d592d;
  font-size: 12px;
}

.center-action {
  text-align: center;
  margin-top: 30px;
}


/* TABLET */

@media (max-width: 1100px) {

  .main-nav {
    gap: 13px;
  }

  .main-nav a {
    font-size: 12px;
  }

  .main-nav a.nav-cta {
    padding: 10px 16px;
  }

  .benefit-grid,
  .support-grid,
  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .benefit-card,
  .support-item {
    min-height: 0;
  }

}


/* MOBILE */

@media (max-width: 900px) {

  .menu-toggle {
    display: block;
  }

  .nav-wrap {
    min-height: 74px;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 74px;
    left: 0;
    right: 0;
    padding: 18px 24px 22px;
    background: #fff;
    box-shadow: 0 15px 20px rgba(10,31,53,.1);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    padding: 11px 3px;
    border-bottom: 1px solid var(--line);
    font-size: 13px;
  }

  .main-nav a.nav-cta {
    margin-top: 12px;
    justify-content: center;
    border: 0;
    padding: 12px 22px;
  }

  .hero {
    min-height: 570px;
    height: 72vh;
  }

  .hero-bottom {
    display: none;
  }

  .idea-layout,
  .two-column,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .team-grid {
    max-width: 560px;
  }

  .callout-link {
    white-space: normal;
  }

  .product-callout {
    align-items: flex-start;
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-main > div:first-child {
    grid-column: 1 / -1;
  }

}


/* SMALL MOBILE */

@media (max-width: 560px) {

  .container {
    width: min(100% - 32px, 1160px);
  }

  .section {
    padding: 65px 0;
  }

  .hero {
    min-height: 600px;
  }

  .hero h1 {
    font-size: 40px;
    letter-spacing: -1.1px;
  }

  .inner-hero h1 {
    font-size: 34px;
  }

  .hero-content p,
  .inner-hero p {
    font-size: 15px;
  }

  .hero-overlay {
    background: linear-gradient(90deg, rgba(5,22,42,.92), rgba(5,22,42,.66));
  }

  .hero-controls {
    gap: 8px;
  }

  .slide-dot,
  .slide-arrow {
    width: 40px;
    height: 40px;
  }

  .slide-arrow {
    font-size: 26px;
  }

  .benefit-grid,
  .support-grid,
  .process-grid,
  .project-grid,
  .funding-grid {
    grid-template-columns: 1fr;
  }

  .benefit-card {
    padding: 23px;
  }

  .funding-top {
    padding: 25px 23px 18px;
  }

  .funding-note {
    padding-inline: 23px;
  }

  .product-callout {
    flex-wrap: wrap;
    padding: 21px;
  }

  .callout-copy {
    flex-basis: calc(100% - 72px);
  }

  .callout-link {
    margin-left: 72px;
  }

  .support-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .profile-card {
    padding: 26px 20px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-main > div:first-child {
    grid-column: auto;
  }

  .inner-hero {
    padding: 70px 0;
  }

}


@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }

}