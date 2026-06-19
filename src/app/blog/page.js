import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = {
  title: "The Trust Gap in Public Communication",
  description:
    "A practical field note on building public trust when policy, health guidance and institutional communication move under pressure.",
  keywords: [
    "public communication trust",
    "public health communication",
    "policy communication strategy",
    "crisis communications",
    "strategic communications India",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "article",
    url: "/blog",
    title: "The Trust Gap in Public Communication",
    description:
      "A practical field note on building trust when policy, health guidance and institutional communication move under pressure.",
    publishedTime: "2026-06-19T09:30:00+05:30",
    authors: ["Monisha Bahuguna"],
    section: "Strategic Communications",
    tags: ["Public trust", "Policy communication", "Public health"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Trust Gap in Public Communication",
    description:
      "A field note on making institutional communication clear, verifiable and actionable.",
  },
};

const principles = [
  {
    number: "01",
    title: "Clarity before volume",
    copy: "A message does not become useful because it appears everywhere. It becomes useful when the audience can identify the action, the source and the next update.",
  },
  {
    number: "02",
    title: "Evidence with a human consequence",
    copy: "Data earns attention when people understand what it changes for them. Translate the proof without weakening it.",
  },
  {
    number: "03",
    title: "Consistency across the room",
    copy: "The press note, spokesperson, social post and field team must carry the same central truth, even when their language changes.",
  },
];

const responseSteps = [
  ["Listen", "Identify the question people are actually asking, not only the one the institution prepared to answer."],
  ["Clarify", "Reduce the message to one verifiable claim, one practical action and one accountable source."],
  ["Mobilise", "Give stakeholders the language, evidence and channel they need to repeat the message accurately."],
  ["Measure", "Track comprehension, correction speed and message pull-through, not visibility alone."],
];

export default function BlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Trust Gap in Public Communication",
    description:
      "A practical field note on building public trust when policy, health guidance and institutional communication move under pressure.",
    image: `${SITE_URL}/blog/opengraph-image`,
    datePublished: "2026-06-19T09:30:00+05:30",
    dateModified: "2026-06-19T09:30:00+05:30",
    mainEntityOfPage: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: "Monisha Bahuguna",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Monisha Bahuguna",
    },
    articleSection: "Strategic Communications",
    keywords: "public trust, policy communication, public health communication",
  };

  return (
    <main className={styles.blogPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <nav className={styles.nav} aria-label="Blog navigation">
        <Link href="/" className={styles.brand} data-cursor="Home" aria-label="Monisha Bahuguna home">
          MB
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#work">Work</Link>
          <Link href="/#signal-room">Signal room</Link>
          <a href="#article">Article</a>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.issueLine}>
          <span>Field note 01</span>
          <span>Public trust</span>
          <time dateTime="2026-06-19">June 19, 2026</time>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.titleBlock}>
            <p className={styles.eyebrow}>Strategy journal / 7 min read</p>
            <h1>The trust gap is where public communication succeeds or fails.</h1>
          </div>
          <div className={styles.heroSummary}>
            <p>
              Institutions often have the facts and still lose the public conversation. The
              missing piece is rarely more information. It is a communication system people can
              understand, verify and act on.
            </p>
            <div className={styles.author}>
              <Image
                src="/projects/profile_photo.webp"
                alt=""
                width={52}
                height={52}
                priority
              />
              <div>
                <strong>Monisha Bahuguna</strong>
                <span>Strategic communications and policy advocacy</span>
              </div>
            </div>
          </div>
        </div>

        <figure className={styles.heroImage}>
          <Image
            src="/projects/4.jpg"
            alt="A public communication setting representing coordinated institutional outreach"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 1180px"
          />
          <figcaption>
            Trust is built before a crisis, tested during it, and remembered after the headlines move on.
          </figcaption>
        </figure>
      </header>

      <article className={styles.article} id="article">
        <aside className={styles.articleRail} aria-label="Article sections">
          <p>In this note</p>
          <a href="#problem">The real problem</a>
          <a href="#architecture">Trust architecture</a>
          <a href="#response">Response loop</a>
          <a href="#measure">What to measure</a>
        </aside>

        <div className={styles.articleBody}>
          <section id="problem">
            <p className={styles.lede}>
              Public communication becomes difficult at the exact moment it matters most: when
              the issue is technical, the pressure is high and different audiences need different
              forms of certainty.
            </p>
            <p>
              A policy team may be focused on procedural accuracy. A newsroom needs a clear public
              consequence. A citizen wants to know what changes today. A field officer needs an
              answer that will survive repetition. All four needs are legitimate, but treating
              them as one audience creates a message that serves none of them well.
            </p>
            <p>
              This is the trust gap: the distance between what an institution knows and what its
              audience can confidently understand. Closing it requires more than polished copy. It
              requires message discipline, stakeholder intelligence and an operational rhythm.
            </p>

            <blockquote>
              <span>Core idea</span>
              Trust grows when communication makes uncertainty visible without making the response feel uncertain.
            </blockquote>
          </section>

          <section id="architecture">
            <div className={styles.sectionHeading}>
              <span>Framework 01</span>
              <h2>Build a trust architecture, not a content calendar.</h2>
            </div>
            <p>
              A content calendar answers when something will be published. A trust architecture
              answers who must believe it, what proof they need, who can credibly say it and how
              quickly the system can correct itself.
            </p>

            <div className={styles.principleGrid}>
              {principles.map((principle) => (
                <article key={principle.number} className={styles.principle}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="response">
            <div className={styles.sectionHeading}>
              <span>Framework 02</span>
              <h2>A useful response moves in a loop, not a straight line.</h2>
            </div>
            <p>
              Communication teams often move directly from information to publication. The stronger
              pattern is iterative: listen for the changing question, clarify the response,
              mobilise trusted carriers and measure whether the meaning survived.
            </p>

            <ol className={styles.responseLoop}>
              {responseSteps.map(([title, copy], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="measure">
            <div className={styles.sectionHeading}>
              <span>Field measure</span>
              <h2>Visibility is an output. Understanding is the outcome.</h2>
            </div>
            <p>
              Reach, impressions and media placements remain useful. They show whether the message
              entered the room. They do not show whether it was understood correctly. For public
              communication, the more revealing measures are often operational.
            </p>

            <div className={styles.measureBand}>
              <div>
                <strong>Correction speed</strong>
                <span>How long does a false claim travel before a credible answer meets it?</span>
              </div>
              <div>
                <strong>Message pull-through</strong>
                <span>Do partners, spokespeople and coverage repeat the intended central truth?</span>
              </div>
              <div>
                <strong>Action clarity</strong>
                <span>Can the audience identify what to do next without needing another explanation?</span>
              </div>
            </div>

            <p>
              The aim is not to make institutions sound certain about everything. It is to make
              them dependable: clear about what is known, honest about what is changing and
              disciplined about when the next answer will arrive.
            </p>
          </section>
        </div>
      </article>

      <footer className={styles.footer}>
        <div>
          <p className={styles.eyebrow}>Continue the conversation</p>
          <h2>Complex work deserves communication people can carry.</h2>
        </div>
        <div className={styles.footerActions}>
          <a href="mailto:monishabahuguna63@gmail.com">Start a conversation</a>
          <Link href="/#signal-room">Open the Signal Room</Link>
        </div>
        <span>Copyright 2026 Monisha Bahuguna</span>
      </footer>
    </main>
  );
}
