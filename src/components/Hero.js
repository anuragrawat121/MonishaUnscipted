"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "./Hero.module.css";

const email = "monishabahuguna63@gmail.com";
const phone = "+91 89795 23284";

const metrics = [
  {
    value: 8,
    suffix: "+",
    label: "years in strategic communication, public relations and policy advocacy",
  },
  {
    value: 30,
    suffix: "+",
    label: "countries supported through governance capacity-building programmes",
  },
  {
    value: 1200,
    suffix: "+",
    label: "startup enrollments per IARI agri-innovation outreach cohort",
  },
  {
    value: 1,
    suffix: "M+",
    label: "combined digital reach through data-led institutional campaigns",
  },
];

const coverStories = [
  {
    number: "01",
    href: "#work",
    title: "Case studies",
    copy: "Policy narratives, media systems and campaign work shaped from the resume.",
  },
  {
    number: "02",
    href: "#experience",
    title: "Experience map",
    copy: "A career path across government, innovation, tourism, education and journalism.",
  },
  {
    number: "03",
    href: "#process",
    title: "Briefing workflow",
    copy: "How she maps stakeholders, builds narratives and tracks communication signals.",
  },
  {
    number: "04",
    href: "#contact",
    title: "Strategic briefs",
    copy: "Contact details and resume access for public impact communication opportunities.",
  },
];

const caseReel = [
  "Policy Advocacy",
  "Media Relations",
  "Public Health",
  "Crisis PR",
  "Innovation Outreach",
];

const projects = [
  {
    image: "/projects/1.jpg",
    eyebrow: "NCGG | Governance Communication",
    title: "Global civil-service programme narratives",
    copy:
      "Managed press relations and strategic narratives for multi-country governance programmes spanning Africa, ASPAC, BRAC and ASEAN audiences.",
    impact: "30+ countries",
    tags: ["PIB coordination", "Policy briefs", "Speeches", "Q&A documents"],
  },
  {
    image: "/projects/5.jpg",
    eyebrow: "IARI | Agri-Innovation Outreach",
    title: "Pusa Krishi startup visibility system",
    copy:
      "Led print, digital and social campaigns for India's largest agri-innovation incubation programme, translating complex healthtech, livestock and climate stories into public-facing content.",
    impact: "1,200+ enrollments",
    tags: ["Google Analytics", "Meta Suite", "Mailchimp", "Media kits"],
  },
  {
    image: "/projects/4.jpg",
    eyebrow: "Uttarakhand Tourism | Crisis PR",
    title: "Safe tourism and wellness positioning",
    copy:
      "Built COVID-era crisis messaging, ministerial briefings and targeted media outreach that repositioned Uttarakhand around safe travel, AYUSH, yoga and wellness tourism.",
    impact: "20+ placements",
    tags: ["Crisis comms", "FAM trips", "Press events", "Ministerial briefs"],
  },
  {
    image: "/projects/2.jpg",
    eyebrow: "IIT Mandi iHub | Healthtech PR",
    title: "Innovation hub media engine",
    copy:
      "Promoted healthtech and entrepreneurship initiatives, coordinated an international mental health workshop, and managed Japanese delegation communication and media follow-up.",
    impact: "8+ national features",
    tags: ["Delegation protocol", "Newsletters", "Story pitches", "PR reports"],
  },
  {
    image: "/projects/3.jpg",
    eyebrow: "SJHIFM | One Health Advocacy",
    title: "SDG-linked governance communication",
    copy:
      "Modernised training modules and built stakeholder narratives around One Health, menstrual hygiene and public health priorities with UNDP and Haryana government partners.",
    impact: "15+ modules",
    tags: ["SDG KPIs", "Roundtables", "UNDP alignment", "Policy narratives"],
  },
];

const competencies = [
  "Strategic communication planning",
  "Public health communication",
  "Policy advocacy",
  "Media relations",
  "Crisis communication",
  "Brand visibility",
  "One Health storytelling",
  "Speechwriting",
  "Opinion editorials",
  "Media intelligence",
  "Event communication",
  "Digital analytics",
];

const timeline = [
  {
    period: "2025 - 2026",
    role: "Sector Expert, Human Resources & Capacity Building",
    org: "SJHIFM, Government of Haryana under NITI Aayog",
    copy:
      "Directed modernisation of 15+ training modules and built SDG-linked communication frameworks for institutional outreach and public health policy advocacy.",
  },
  {
    period: "2023 - 2025",
    role: "Young Professional, Communications & Policy Advocacy",
    org: "National Centre for Good Governance",
    copy:
      "Managed media engagement, high-level briefing material and communication planning for governance programmes serving civil-service audiences from 30+ countries.",
  },
  {
    period: "2022 - 2023",
    role: "Incubation Manager, Strategic Communication & Outreach",
    org: "Indian Agricultural Research Institute",
    copy:
      "Led outreach for agri-innovation and healthtech startups, growing institutional following by 40% and reaching 1M+ people across digital platforms.",
  },
  {
    period: "2021 - 2022",
    role: "Associate, Public Relations & Outreach",
    org: "IIT Mandi iHub Innovation Centre",
    copy:
      "Built PR campaigns for healthtech and entrepreneurship initiatives and coordinated international workshop and delegation communication.",
  },
  {
    period: "2020 - 2021",
    role: "Counsellor, Media & PR Engagement",
    org: "Fortuna PR for Uttarakhand Tourism Development Board",
    copy:
      "Led safe-tourism crisis communication, media briefings and wellness tourism campaigns during COVID-19.",
  },
  {
    period: "2017 - 2020",
    role: "Reporter, Lecturer and Programme Associate",
    org: "The Pioneer, Dev Bhoomi Uttarakhand University and Child Rights Society",
    copy:
      "Built a journalism and media-literacy foundation through 30+ bylined stories, communication teaching and citizen journalism training.",
  },
];

const process = [
  {
    step: "01",
    title: "Map the room",
    copy:
      "Identify stakeholders, public pressure, policy context, media appetite and the decision-makers who need clarity.",
  },
  {
    step: "02",
    title: "Build the narrative",
    copy:
      "Turn technical or institutional work into press releases, speeches, op-eds, case studies, briefing notes and campaign messages.",
  },
  {
    step: "03",
    title: "Track the signal",
    copy:
      "Monitor media milestones, digital performance, stakeholder response and PR reports so campaigns stay measurable.",
  },
];

const credentials = [
  {
    title: "Education",
    items: ["M.A. Media and Communication Studies, Doon University", "B.A. Media and Communication Studies, Doon University"],
  },
  {
    title: "Tools",
    items: ["Media intelligence platforms", "Mailchimp", "Google Analytics", "Meta Suite", "Canva", "CMS platforms"],
  },
  {
    title: "Publications",
    items: [
      "30+ articles for The Pioneer on environment, governance and social impact",
      "Co-author, Agri-Startup Innovations 2022 report",
      "Published creative writing in two story collections",
    ],
  },
];

const marqueeTerms = [
  "Public Health Communication",
  "Policy Advocacy",
  "One Health",
  "Media Relations",
  "Crisis Communication",
  "Governance Narratives",
  "Innovation Storytelling",
  "Strategic Briefings",
];

export default function Hero() {
  const pageRef = useRef(null);
  const heroCardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.72,
      smoothWheel: true,
      wheelMultiplier: 1.25,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const progressEl = pageRef.current?.querySelector("[data-scroll-progress]");
      const progressBar = pageRef.current?.querySelector("[data-scroll-progress-bar]");

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const progress = Math.round(self.progress * 100);

          if (progressEl) {
            progressEl.textContent = `${progress.toString().padStart(2, "0")}%`;
          }

          if (progressBar) {
            progressBar.style.transform = `scaleY(${self.progress})`;
          }
        },
      });

      const intro = gsap.timeline({ delay: 0.15 });

      intro
        .fromTo(
          heroCardRef.current,
          { clipPath: "inset(100% 0 0 0 round 22px)" },
          { clipPath: "inset(0% 0 0 0 round 22px)", duration: 1.2, ease: "power4.inOut" }
        )
        .fromTo(
          "[data-hero-reveal]",
          { y: 86, opacity: 0, skewY: 4 },
          { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.08, ease: "expo.out" },
          "-=0.45"
        );

      const heroScroll = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-hero-section]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      heroScroll
        .to("[data-hero-stack]", { yPercent: -12, scale: 0.9, ease: "none" }, 0)
        .to("[data-hero-portrait]", { y: 26, scale: 1.08, rotate: 3, ease: "none" }, 0)
        .to("[data-hero-sweep]", { xPercent: 112, opacity: 0.9, ease: "none" }, 0);

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          }
        );
      });

      gsap.fromTo(
        "[data-cover-frame]",
        { clipPath: "inset(18% 18% 18% 18% round 8px)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0% round 8px)",
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "[data-cover]",
            start: "top 78%",
          },
        }
      );

      const coverZoomTl = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-cover]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      coverZoomTl
        .fromTo(
          "[data-cover-image]",
          { yPercent: -8, scale: 1.24 },
          { yPercent: 0, scale: 1.05, duration: 0.5, ease: "none" }
        )
        .to("[data-cover-image]", { yPercent: 8, scale: 1.22, duration: 0.5, ease: "none" });

      gsap.fromTo(
        "[data-cover-scan]",
        { scaleX: 0, opacity: 0.2 },
        {
          scaleX: 1,
          opacity: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-cover]",
            start: "top 75%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "[data-cover-line]",
        { x: 44, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-cover]",
            start: "top 68%",
          },
        }
      );

      gsap.utils.toArray("[data-counter]").forEach((counter) => {
        const target = Number(counter.dataset.target);
        const value = { current: 0 };

        gsap.to(value, {
          current: target,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            counter.textContent = Math.round(value.current).toLocaleString("en-IN");
          },
        });
      });

      gsap.utils.toArray("[data-project-card]").forEach((card) => {
        const image = card.querySelector("[data-project-image]");
        const imageWrap = card.querySelector("[data-project-image-wrap]");
        const content = card.querySelectorAll("[data-project-content]");

        gsap.fromTo(
          card,
          { y: 86, scale: 0.96 },
          {
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          }
        );

        gsap.fromTo(
          imageWrap,
          { clipPath: "inset(18% 0 18% 0 round 6px)" },
          {
            clipPath: "inset(0% 0 0% 0 round 6px)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 76%",
            },
          }
        );

        gsap.fromTo(
          content,
          { x: 42 },
          {
            x: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 72%",
            },
          }
        );

        const imageZoomTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        imageZoomTl
          .fromTo(
            image,
            { yPercent: -10, scale: 1.28 },
            { yPercent: 0, scale: 1.05, duration: 0.5, ease: "none" }
          )
          .to(image, { yPercent: 10, scale: 1.24, duration: 0.5, ease: "none" });
      });

      gsap.fromTo(
        "[data-reel-item]",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-reel]",
            start: "top 76%",
          },
        }
      );

      gsap.to("[data-reel-track]", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-reel]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        "[data-timeline-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-experience]",
            start: "top 70%",
            end: "bottom 74%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray("[data-timeline-item]").forEach((item) => {
        gsap.fromTo(
          item,
          { x: -34, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          }
        );
      });

      gsap.to("[data-marquee-track]", {
        xPercent: -50,
        duration: 28,
        ease: "linear",
        repeat: -1,
      });
    }, pageRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className={styles.portfolioPage} ref={pageRef}>
      <div className={styles.noiseOverlay} />
      <div className={styles.scrollProgress} aria-hidden="true">
        <span data-scroll-progress>00%</span>
        <i>
          <b data-scroll-progress-bar />
        </i>
      </div>

      <nav className={styles.nav} aria-label="Portfolio navigation">
        <a href="#top" className={styles.brand} data-cursor="Home">
          MB
        </a>
        <div className={styles.navLinks}>
          <a href="#cover" data-cursor="Read">
            Cover
          </a>
          <a href="#work" data-cursor="View">
            Work
          </a>
          <a href="#experience" data-cursor="Timeline">
            Experience
          </a>
          <a href="#contact" data-cursor="Talk">
            Contact
          </a>
        </div>
      </nav>

      <section className={styles.heroSection} id="top" data-hero-section aria-labelledby="portfolio-title">
        <div className={styles.heroCard} ref={heroCardRef} data-hero-card>
          <div className={styles.heroSweep} data-hero-sweep />
          <div className={styles.heroNameBlock} data-hero-stack>
            <div className={styles.lineOverflow}>
              <h1 id="portfolio-title" className={styles.headline} data-hero-reveal aria-label="Monisha Bahuguna">
                {["Monisha", "Bahuguna"].map((word) => (
                  <span key={word} className={styles.headlineLine}>
                    {word.split("").map((char, i) => (
                      <span key={`${word}-${i}`} className={styles.letter} aria-hidden="true">
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <div className={styles.heroPortrait} data-hero-reveal data-hero-portrait>
            <Image
              src="/projects/profile_photo.webp"
              alt="Monisha Bahuguna"
              fill
              priority
              sizes="(max-width: 900px) 240px, 360px"
              className={styles.heroPortraitImage}
            />
          </div>

        </div>
      </section>

      <section className={styles.metricsSection} aria-label="Portfolio highlights">
        {metrics.map((metric) => (
          <article key={metric.label} className={styles.metricCard} data-reveal>
            <strong>
              <span data-counter data-target={metric.value}>
                0
              </span>
              {metric.suffix}
            </strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <section className={styles.coverSection} id="cover" data-cover aria-labelledby="cover-title">
        <div className={styles.coverIntro} data-reveal>
          <p className={styles.sectionLabel}>Digital cover</p>
          <h2 id="cover-title">An editorial front page for policy, health and media communication.</h2>
          <p>
            The portfolio now works like a digital cover story: fast to scan, anchored in proof,
            and structured around the roles where Monisha has built public trust.
          </p>
        </div>

        <div className={styles.coverFeatureGrid}>
          <div className={styles.coverFrame} data-cover-frame data-cursor="Cover">
            <Image
              src="/projects/5.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              className={styles.coverImage}
              data-cover-image
            />
            <div className={styles.coverWash} />
            <div className={styles.coverScan} data-cover-scan />
            <div className={styles.coverMasthead}>
              <span>Monisha Bahuguna</span>
              <strong>Public Impact Review</strong>
              <p>Governance | Health | Innovation | Media</p>
            </div>
            <div className={styles.coverBottomLine}>
              <span>Dehradun, India</span>
              <span>8+ years</span>
            </div>
          </div>

          <div className={styles.coverIndex} aria-label="Cover story index">
            {coverStories.map((story) => (
              <a href={story.href} key={story.number} className={styles.coverStory} data-cover-line data-cursor="Open">
                <span>{story.number}</span>
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <p className={styles.sectionLabel}>Communication focus</p>
        <div className={styles.aboutGrid}>
          <h2>She turns technical programmes into stories people can trust, repeat and act on.</h2>
          <p>
            Her work sits at the intersection of public health priorities, government programmes,
            international civil-service training, startup ecosystems and crisis-sensitive media
            environments. The result is communication that can serve a ministerial briefing, a
            journalist pitch, a donor-facing report and a community-facing campaign.
          </p>
        </div>
        <div className={styles.serviceRail}>
          {competencies.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className={styles.workSection} id="work" aria-labelledby="work-title">
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.sectionLabel}>Selected case studies</p>
          <h2 id="work-title">Campaigns, policy narratives and media systems from the resume.</h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article
              key={project.title}
              className={styles.projectCard}
              data-project-card
              data-cursor="Open"
            >
              <div className={styles.projectImageWrap} data-project-image-wrap>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className={styles.projectImage}
                  data-project-image
                />
              </div>
              <div className={styles.projectMeta} data-project-content>
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.impact}</span>
              </div>
              <p className={styles.projectCopy} data-project-content>{project.copy}</p>
              <div className={styles.projectTags} data-project-content>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.reelSection} data-reel aria-labelledby="reel-title">
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.sectionLabel}>Project reel</p>
          <h2 id="reel-title">Scroll-led discovery, built like a live editorial index.</h2>
        </div>

        <div className={styles.reelTrack} data-reel-track>
          {projects.map((project, index) => (
            <a href="#work" className={styles.reelItem} key={project.title} data-reel-item data-cursor="View">
              <span>{`0${index + 1}`}</span>
              <strong>{project.title}</strong>
              <em>{caseReel[index]}</em>
              <div className={styles.reelPreview}>
                <Image src={project.image} alt="" fill sizes="220px" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack} data-marquee-track>
          {[...marqueeTerms, ...marqueeTerms].map((term, index) => (
            <span key={`${term}-${index}`}>{term}</span>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection} id="experience" data-experience aria-labelledby="experience-title">
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.sectionLabel}>Experience map</p>
          <h2 id="experience-title">A career built across government, innovation, tourism, media and education.</h2>
        </div>

        <div className={styles.timelineWrap}>
          <div className={styles.timelineLine} data-timeline-line />
          {timeline.map((item) => (
            <article className={styles.timelineItem} key={`${item.period}-${item.role}`} data-timeline-item>
              <time>{item.period}</time>
              <div>
                <h3>{item.role}</h3>
                <p className={styles.timelineOrg}>{item.org}</p>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection} id="process" aria-labelledby="process-title">
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.sectionLabel}>Field-fit approach</p>
          <h2 id="process-title">A briefing-room workflow for high-stakes communication.</h2>
        </div>

        <div className={styles.processGrid}>
          {process.map((item) => (
            <article key={item.step} className={styles.processCard} data-reveal>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.credentialsSection} aria-labelledby="credentials-title">
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.sectionLabel}>Credentials</p>
          <h2 id="credentials-title">Education, tools and published work support the advisory practice.</h2>
        </div>

        <div className={styles.credentialsGrid}>
          {credentials.map((group) => (
            <article key={group.title} className={styles.credentialCard} data-reveal>
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <p className={styles.sectionLabel}>Available for strategic communication briefs</p>
        <h2>Need policy, public health or media communication that can hold up under scrutiny?</h2>
        <div className={styles.contactActions}>
          <a href={`mailto:${email}`} className={styles.contactButton} data-cursor="Email">
            {email}
          </a>
          <a href="tel:+918979523284" className={styles.secondaryButton} data-cursor="Call">
            {phone}
          </a>
        </div>
      </section>
    </main>
  );
}
