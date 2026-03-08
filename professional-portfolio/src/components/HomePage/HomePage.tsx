import styles from "../HomePage/HomePage.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
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
      <div className={styles.linksContainer}>
          <a href="https://github.com/tgriarte26">github</a>
          <li><a href="https://www.linkedin.com/in/trevor-raphael-griarte">linkedin</a></li>
          <li><a href="https://www.instagram.com/trevorgriarte/">instagram</a></li>
          <li><a href="https://www.tiktok.com/@trevorgriarte">tiktok</a></li>
      </div>

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
                <a href="https://github.com/tgriarte26/PlsReadMe">
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src="/icons/github.png"
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src="/icons/world-wide-web.png"
                      width={24}
                      height={24}
                      alt="Github"
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
                <a href="https://github.com/tgriarte26/south-bay-volunteer-circle">
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src="/icons/github.png"
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a href="https://southbayvolunteercircle.netlify.app/">
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src="/icons/world-wide-web.png"
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>StackPera</h2>
              <p className={styles.cardDescription}>
                A financial tracking tool designed to help poker fnatics mangage
                buy-ins and monitor profits.
              </p>
              <div className={styles.projectButtons}>
                <a href="https://github.com/tgriarte26/StackPera">
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Github</p>
                    <Image
                      src="/icons/github.png"
                      width={24}
                      height={24}
                      alt="Github"
                    />
                  </div>
                </a>
                <a>
                  <div className={styles.projectInnerButtons}>
                    <p className={styles.projectInnerButtonsText}>Website</p>
                    <Image
                      src="/icons/world-wide-web.png"
                      width={24}
                      height={24}
                      alt="Github"
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
        <div className={styles.experienceContainer}>
          <p className={styles.experienceTitle}>
            Multimedia & Software Developer Intern
          </p>
          <p className={styles.experienceDate}>
            September 2025 - Present
          </p>
        </div>
        <p className={styles.experienceTitle}>
            United States Youth Volleyball League (USYVL)
        </p>
      </div>
    </div>
  );
}
