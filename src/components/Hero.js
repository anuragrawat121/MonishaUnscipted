"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "./Hero.module.css";

const email = "monishabahuguna63@gmail.com";

const projects = [
  {
    image: "/projects/1.jpg",
    title: "Governance",
    subtitle: "Global civil-service programme narratives",
    org: "National Centre for Good Governance",
    year: "2023-25",
    impact: "30+ countries",
    copy:
      "Press relations, policy narratives, speeches and briefing material for governance programmes across Africa, ASPAC, BRAC and ASEAN audiences.",
  },
  {
    image: "/projects/5.jpg",
    title: "Innovation",
    subtitle: "Pusa Krishi startup visibility system",
    org: "Indian Agricultural Research Institute",
    year: "2022-23",
    impact: "1M+ reach",
    copy:
      "An integrated print, digital and media outreach system translating agri-innovation, healthtech and climate work into public-facing stories.",
  },
  {
    image: "/projects/4.jpg",
    title: "Crisis PR",
    subtitle: "Safe tourism and wellness positioning",
    org: "Uttarakhand Tourism",
    year: "2020-21",
    impact: "20+ placements",
    copy:
      "COVID-era crisis messaging, ministerial briefing and targeted media outreach positioning Uttarakhand around safe travel, AYUSH and wellness.",
  },
  {
    image: "/projects/2.jpg",
    title: "Healthtech",
    subtitle: "Innovation hub media engine",
    org: "IIT Mandi iHub",
    year: "2021-22",
    impact: "8+ national features",
    copy:
      "Media strategy for healthtech and entrepreneurship initiatives, including international workshop and Japanese delegation communication.",
  },
  {
    image: "/projects/3.jpg",
    title: "One Health",
    subtitle: "SDG-linked governance communication",
    org: "SJHIFM / Government of Haryana",
    year: "2025-26",
    impact: "15+ modules",
    copy:
      "Stakeholder narratives and modernised training communication around One Health, menstrual hygiene and public-health priorities.",
  },
];

const skills = [
  "Strategic Communication",
  "Policy Advocacy",
  "Public Health",
  "Media Relations",
  "Crisis Communication",
  "Narrative Strategy",
];

const timeline = [
  ["2025 - 2026", "Sector Expert, Human Resources & Capacity Building", "SJHIFM, Government of Haryana under NITI Aayog"],
  ["2023 - 2025", "Young Professional, Communications & Policy Advocacy", "National Centre for Good Governance"],
  ["2022 - 2023", "Incubation Manager, Strategic Communication & Outreach", "Indian Agricultural Research Institute"],
  ["2021 - 2022", "Associate, Public Relations & Outreach", "IIT Mandi iHub Innovation Centre"],
  ["2020 - 2021", "Counsellor, Media & PR Engagement", "Uttarakhand Tourism Development Board"],
  ["2017 - 2020", "Reporter, Lecturer and Programme Associate", "The Pioneer and public-interest organisations"],
];

export default function Hero() {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      duration: reduceMotion ? 0 : 0.9,
      smoothWheel: !reduceMotion,
      wheelMultiplier: 1.05,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ delay: 2.45 });
      intro
        .fromTo(
          "[data-hero-line]",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.15, stagger: 0.1, ease: "power4.out" }
        )
        .fromTo(
          "[data-hero-meta]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
          "-=0.55"
        );

      gsap.to("[data-hero-title]", {
        yPercent: -18,
        opacity: 0.18,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray("[data-project]").forEach((project, index) => {
        const image = project.querySelector("[data-project-image]");
        const title = project.querySelector("[data-project-title]");
        const meta = project.querySelector("[data-project-meta]");

        gsap.fromTo(
          image,
          { clipPath: "inset(18% 12% 18% 12%)", scale: 1.16 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: project,
              start: "top 82%",
              end: "top 34%",
              scrub: 0.7,
            },
          }
        );

        gsap.fromTo(
          title,
          { xPercent: index % 2 === 0 ? -12 : 12 },
          {
            xPercent: index % 2 === 0 ? 6 : -6,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          meta,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 48%",
            },
          }
        );

        gsap.to(image, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray("[data-skill]").forEach((skill) => {
        gsap.fromTo(
          skill,
          { opacity: 0.16, x: 80 },
          {
            opacity: 1,
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: skill,
              start: "top 82%",
              end: "top 48%",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          }
        );
      });
    }, pageRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className={styles.page} ref={pageRef}>
      <nav className={styles.nav} aria-label="Portfolio navigation">
        <a className={styles.logo} href="#top" aria-label="Monisha Bahuguna home">
          MB
        </a>
        <div className={styles.navLinks}>
          <a href="#work">Portfolio</a>
          <a href="#about">About</a>
          <Link href="/blog">Journal</Link>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero} id="top" data-hero>
        <div className={styles.heroInner} data-hero-title>
          <div className={styles.titleMask}>
            <h1 data-hero-line>Monisha</h1>
          </div>
          <div className={styles.titleMask}>
            <h1 data-hero-line>Bahuguna</h1>
          </div>
          <p className={styles.heroSubtitle} data-hero-meta>
            Strategic communication for public systems, policy, health and media.
          </p>
        </div>

        <div className={styles.heroFooter}>
          <a href="#work" data-hero-meta>
            Scroll to explore
          </a>
          <a href="/Monisha_Bahuguna_Resume_.pdf" target="_blank" rel="noreferrer" data-hero-meta>
            Download resume
          </a>
        </div>
      </section>

      <section className={styles.intro} id="about">
        <p className={styles.sectionLabel} data-reveal>
          Profile
        </p>
        <div className={styles.introGrid}>
          <h2 data-reveal>
            Turning complex institutions and public programmes into stories people can trust.
          </h2>
          <div data-reveal>
            <p>
              Monisha works across governance, public health, innovation and crisis-sensitive
              media environments. Her practice connects policy detail with clear narratives,
              credible proof and communication systems built for action.
            </p>
            <div className={styles.profileMeta}>
              <span>8+ years</span>
              <span>30+ countries</span>
              <span>1M+ digital reach</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects} id="work" aria-labelledby="work-title">
        <div className={styles.projectsHeader}>
          <p className={styles.sectionLabel}>Selected work</p>
          <h2 id="work-title">Public impact, told with clarity.</h2>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.title} data-project>
              <div className={styles.projectImage} data-project-image>
                <Image
                  src={project.image}
                  alt={`${project.subtitle} communication project`}
                  fill
                  sizes="(max-width: 768px) 90vw, 68vw"
                  priority={index === 0}
                />
              </div>

              <h3 className={styles.projectTitle} data-project-title>
                {project.title}
              </h3>

              <div className={styles.projectMeta} data-project-meta>
                <div>
                  <span>{project.year}</span>
                  <span>{project.impact}</span>
                </div>
                <h4>{project.subtitle}</h4>
                <p>{project.copy}</p>
                <small>{project.org}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.statement}>
        <p data-reveal>
          Communication should not decorate the work. It should make the work understood,
          credible and useful.
        </p>
      </section>

      <section className={styles.skills} aria-labelledby="skills-title">
        <p className={styles.sectionLabel}>Core practice</p>
        <h2 id="skills-title" className={styles.visuallyHidden}>
          Core communication skills
        </h2>
        <div>
          {skills.map((skill) => (
            <p key={skill} data-skill>
              {skill}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.experience} aria-labelledby="experience-title">
        <div className={styles.experienceHeader} data-reveal>
          <p className={styles.sectionLabel}>Experience</p>
          <h2 id="experience-title">A career across government, innovation, tourism and media.</h2>
        </div>
        <div className={styles.timeline}>
          {timeline.map(([period, role, org]) => (
            <article key={`${period}-${role}`} data-reveal>
              <time>{period}</time>
              <div>
                <h3>{role}</h3>
                <p>{org}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.journal}>
        <div className={styles.journalImage} data-reveal>
          <Image
            src="/projects/4.jpg"
            alt="Public communication and media engagement"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.journalCopy} data-reveal>
          <p className={styles.sectionLabel}>Strategy journal</p>
          <h2>The trust gap in public communication.</h2>
          <p>
            A field note on making institutional communication clear, verifiable and actionable
            when the pressure is high.
          </p>
          <Link href="/blog">Read the article</Link>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.sectionLabel}>Start a conversation</p>
        <a href={`mailto:${email}`} data-reveal>
          Let&apos;s tell the story.
        </a>
        <div className={styles.contactFooter}>
          <span>Dehradun, India</span>
          <span>{email}</span>
          <span>2026</span>
        </div>
      </section>
    </main>
  );
}
