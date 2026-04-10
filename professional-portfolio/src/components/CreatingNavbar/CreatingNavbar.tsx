"use client"
import styles from "./CreatingNavbar.module.css";
import { useState, useRef } from "react";
import Image from "next/image";

export default function CreatingNavBar() {
  const [active, setActive] = useState("video");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Creating</h1>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${active === "video" ? styles.active : ""}`} onClick={() => setActive("video")}>Video Editing</button>
        <button className={`${styles.button} ${active === "electronics" ? styles.active : ""}`} onClick={() => setActive("electronics")}>Electronics</button>
      </div>
      <div>
        {active === "video" && <div>
        <div className={styles.page}>
          <div className={styles.cardContainer}>
            <div className={`${styles.videoEditingCard}`}>
              <h2 className={styles.cardTitle}>The Story of Rama</h2>
                <iframe className={styles.videoCard}src="https://www.youtube.com/embed/iUoPTzBBO0c?si=bb_53hJvUFiPDOWd" height="300" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className={styles.cardDescription}>
                Senior Theology project recorded at Sur La Brea Park
              </p>
              <div className={styles.projectButtons}>
                <a
                  href="https://github.com/tgriarte26/PlsReadMe"
                  target="_blank"
                  onMouseEnter={() => setHovered("github1")}
                  onMouseLeave={() => setHovered(null)}
                >
                </a>
              </div>
            </div>
            <div className={styles.videoEditingCard}>
              <h2 className={styles.cardTitle}>USYVL Promotion Video</h2>
              <iframe className={styles.videoCard} height="300" src="https://www.youtube.com/embed/5ipoepRYYEw?si=02ZSyHHHJ5LMs7Z2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className={styles.cardDescription}>
                Created this video for the USYVL organization
              </p>
            </div>
          </div>
        </div>
      </div>}
        {active === "electronics" && <div>
        <div className={styles.page}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Arduino Project #1</h2>

              <p className={styles.cardDescription}>
                Turned on an led light
              </p>
              <div className={`${styles.projectButtons} gap-4`}>
              </div>
            </div>
          </div>
        </div>
      </div>}
      </div>
    </div>
  );
}
