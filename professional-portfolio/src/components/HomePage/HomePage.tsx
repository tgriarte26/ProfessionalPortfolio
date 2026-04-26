"use client";
import styles from "../HomePage/HomePage.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function HomePage() {
  const [hovered, setHovered] = useState<string | null>(null);
  let initialDate = new Date(2026, 1, 2).getTime(); 
  let dateNow = Date.now();
  const difference = dateNow - initialDate;
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // 24 hours, 60 mins, 60 secs, 1000 ms
  let daysSince = Math.floor(difference / millisecondsPerDay);

  return (
    <div className={styles.container}>
      {/** About Me */}
      <div>
        <h1 className={styles.name}>Trevor Raphael Griarte</h1>
        <h2 className={styles.major}>
          Electrical Engineering & Computer Sciences (EECS) Major
        </h2>
        <div className={styles.divider}></div>
        <h1 className={styles.subheader}>About Me</h1>
        <p className={styles.aboutMe}>
          I am an 18 year old student at El Camino College with a strong focus
          on software and hardware development. I build full-stack applications
          using Next.js, TypeScript, and Python.
        </p>
      </div>

      {/** Links */}
      <div className={styles.divider}></div>
      <div className={styles.resumeContainer}>
          <a href="resume">download my resume</a>
      </div>
      <div className={styles.bigDivider}></div>

      <div className={styles.linksContainer}>
          <a href="https://github.com/tgriarte26" target="_blank">github</a>
          <li><a href="https://www.linkedin.com/in/trevor-raphael-griarte" target="_blank">linkedin</a></li>
          <li><a href="https://www.instagram.com/trevorgriarte/" target="_blank">instagram</a></li>
          <li><a href="https://www.tiktok.com/@trevorgriarte" target="_blank">tiktok</a></li>
      </div>

      <div className={styles.smallDivider}></div>

      <h2 className={styles.greatLockInHighlight}>tiktok → the great lock in series: day {daysSince}</h2>

      <div className={styles.divider}></div>

      {/** Projects */}
      <div>
        <div className={styles.page}>
          <h1 className={styles.subheader}>Projects</h1>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>PlsReadMe</h2>
              <p className={styles.cardDescription}>
                A modern markdown editor built for developers to create
                appealing and professional README files for their Github
                repositories.
              </p>
              <div className={styles.projectButtons}>
                <a href="https://github.com/tgriarte26/PlsReadMe" target="_blank" onMouseEnter={() => setHovered("github1")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src={hovered === "github1" ? "/icons/github-white.png" : "/icons/github.png"}
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a href="https://pls-read-me.vercel.app/" target="_blank" onMouseEnter={() => setHovered("website1")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src={hovered === "website1" ? "/icons/world-wide-web-white.png" : "/icons/world-wide-web.png"}
                      width={24}
                      height={24}
                      alt="Website"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>South Bay Volunteer Circle</h2>
              <p className={styles.cardDescription}>
                Connecting high school students across the South Bay with
                meaningful volunteer and internship opportunities to drive
                positive change in their communities.
              </p>
              <div className={styles.projectButtons}>
                <a href="https://github.com/tgriarte26/south-bay-volunteer-circle" target="_blank" onMouseEnter={() => setHovered("github2")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src={hovered === "github2" ? "/icons/github-white.png" : "/icons/github.png"}
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a href="https://southbayvolunteercircle.netlify.app/" target="_blank" onMouseEnter={() => setHovered("website2")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src={hovered === "website2" ? "/icons/world-wide-web-white.png" : "/icons/world-wide-web.png"}
                      width={24}
                      height={24}
                      alt="Website"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>CCorithm</h2>
              <p className={styles.cardDescription}>
                A high-quality transfer guide for community college students who plan to transfer to a four-year university.
              </p>
              <div className={styles.projectButtons}>
                <a href="https://github.com/tgriarte26/Ccorithm" target="_blank" onMouseEnter={() => setHovered("github3")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src={hovered === "github3" ? "/icons/github-white.png" : "/icons/github.png"}
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a href="https://tryccorithm.vercel.app" onMouseEnter={() => setHovered("website3")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src={hovered === "website3" ? "/icons/world-wide-web-white.png" : "/icons/world-wide-web.png"}
                      width={24}
                      height={24}
                      alt="Website"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Super Auto Pets Catalog</h2>
              <p className={styles.cardDescription}>
                An organized catalog of characters or "pets" from the popular game called Super Auto Pets.
              </p>
              <div className={styles.projectButtons}>
                <a href="https://github.com/tgriarte26/SuperAutoPetsCatalog" target="_blank" onMouseEnter={() => setHovered("github4")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src={hovered === "github4" ? "/icons/github-white.png" : "/icons/github.png"}
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a href="https://tgriarte26.github.io/SuperAutoPetsCatalog/" onMouseEnter={() => setHovered("website4")} onMouseLeave={() => setHovered(null)}>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src={hovered === "website4" ? "/icons/world-wide-web-white.png" : "/icons/world-wide-web.png"}
                      width={24}
                      height={24}
                      alt="Website"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/** Experience */}
      <div>
        <h1 className={styles.subheader}>Experience</h1>
        <div className={styles.smallDivider}></div>
        <div className={styles.experienceContainer}>
          <p className={styles.experienceTitle}>
            Multimedia & Software Developer Intern
          </p>
          <p className={styles.experienceDate}>
            September 2025 - Present
          </p>
        </div>
        <p className={styles.experienceOrganization}>
            United States Youth Volleyball League (USYVL)
        </p>

        <div className={styles.divider}></div>

        <div className={styles.experienceContainer}>
          <p className={styles.experienceTitle}>
            Software Developer Intern
          </p>
          <p className={styles.experienceDate}>
            October 2025 - Present
          </p>
        </div>
        <p className={styles.experienceOrganization}>
            ShareVita
        </p>

        <div className={styles.divider}></div>

        <div className={styles.experienceContainer}>
          <p className={styles.experienceTitle}>
            Academic Tutor
          </p>
          <p className={styles.experienceDate}>
            August 2025 - Present
          </p>
        </div>
        <p className={styles.experienceOrganization}>
            Kumon Math And Reading Center
        </p>

        <div className={styles.divider}></div>

        <div className={styles.experienceContainer}>
          <p className={styles.experienceTitle}>
            Head of Scratch & JavaScript Curriculum
          </p>
          <p className={styles.experienceDate}>
            May 2024 - Present
          </p>
        </div>
        <p className={styles.experienceOrganization}>
            STEM For Others
        </p>

      </div>
    </div>
  );
}
