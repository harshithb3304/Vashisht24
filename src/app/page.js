"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document
      .querySelector("meta[name=viewport]")
      .setAttribute(
        "content",
        "width=device-width, initial-scale=" + 1 / window.devicePixelRatio
      );

    let prevScrollPos = parseInt(localStorage.getItem("scrollPosition")) || 0; // Restore previous scroll position or default to 0
    const threshold = 850; // Adjust this value to set the scrolling threshold

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";

      const topLeftImage = document.querySelector(`.${styles.image1}`);
      const topRightImage = document.querySelector(`.${styles.image2}`);
      // const RightImage = document.querySelector(`.${styles.image4}`);
      // const LeftImage = document.querySelector(`.${styles.image3}`);
      const heading_main_1 = document.querySelector(
        `.${styles.landing_heading_1}`
      );
      const heading_main_2 = document.querySelector(
        `.${styles.lending_heading_2}`
      );
      const Leftfloor = document.querySelector(`.${styles.image6}`);
      const Rightfloor = document.querySelector(`.${styles.image7}`);
      // const Leftm = document.querySelector(`.${styles.image8}`);
      // const Rightm = document.querySelector(`.${styles.image9}`);

      if (topLeftImage && topRightImage && heading_main_1 && heading_main_2) {
        topLeftImage.style.transform = `translate(-${
          currentScrollPos / 4
        }px, -${currentScrollPos / 4}px)`;
        topRightImage.style.transform = `translate(${currentScrollPos / 4}px, ${
          currentScrollPos / 4
        }px)`;
        // RightImage.style.transform = `translate(${currentScrollPos }px)`;
        // LeftImage.style.transform = `translate(-${currentScrollPos }px)`;
        Rightfloor.style.transform = `translate(${currentScrollPos * 1.2}px)`;
        Leftfloor.style.transform = `translate(-${currentScrollPos * 1.2}px)`;
        // Rightm.style.transform = `translate(${currentScrollPos * 1.5}px)`;
        // Leftm.style.transform = `translate(-${currentScrollPos * 1.5}px)`;

        const baseFontSize_1 = parseFloat(
          window.getComputedStyle(heading_main_1).fontSize
        );
        const baseFontSize_2 = parseFloat(
          window.getComputedStyle(heading_main_2).fontSize
        );

        const scrollFactor = 2;

        const scrollDiff = Math.abs(currentScrollPos - prevScrollPos);

        const newSize_1 =
          scrollDirection === "down"
            ? baseFontSize_1 + scrollDiff * scrollFactor
            : baseFontSize_1 - scrollDiff * scrollFactor;
        const newSize_2 =
          scrollDirection === "down"
            ? baseFontSize_2 + scrollDiff * scrollFactor
            : baseFontSize_2 - scrollDiff * scrollFactor;

        heading_main_1.style.fontSize = `${newSize_1}px`;
        heading_main_2.style.fontSize = `${newSize_2}px`;
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener
      window.removeEventListener("scroll", handleScroll);

      // Reset elements to default positions and styles
      const elementsToReset = document.querySelectorAll(
        `.${styles.image1}, .${styles.image2}, .${styles.image3}, .${styles.image4}, .${styles.landing_heading_1}, .${styles.lending_heading_2}, .${styles.image6}, .${styles.image7}, .${styles.image8}, .${styles.image9}`
      );
      elementsToReset.forEach((element) => {
        element.style.transform = "";
        element.style.fontSize = "";
      });

      // Clear scroll position from localStorage
      localStorage.removeItem("scrollPosition");
    };
  }, []);

  return (
    <div className={styles.landing}>
      <Image
        src="/images/left_hand.png"
        className={styles.image1}
        alt="Top Left"
        width={626}
        height={400}
      />
      {/* <Image src="/images/floor.png" className={styles.image3} alt="Top Left" width={9000} height={200} /> */}
      <Image
        src="/images/floor.png"
        className={styles.image6}
        alt="Top Left"
        width={9000}
        height={450}
      />
      <h1 className={styles.landing_heading_1}>VASHISHT</h1>
      <h2 className={styles.lending_heading_2}>nexus aeon</h2>
      <Image
        src="/images/right_hand.png"
        className={styles.image2}
        alt="Top Right"
        width={626}
        height={500}
      />
      {/* <Image src="/images/floor.png" className={styles.image4} alt="Top Left" width={9000} height={400} /> */}
      <Image
        src="/images/floor.png"
        className={styles.image7}
        alt="Top Left"
        width={9000}
        height={450}
      />
      {/* <Image src="/images/mountain.png" className={styles.image8} alt="Top Left" width={9000} height={200} />
      <Image src="/images/mountain.png" className={styles.image9} alt="Top Left" width={9000} height={200} /> */}
      <Image
        src="/images/ball.png"
        className={styles.image10}
        alt="Top Left"
        width={400}
        height={400}
      />
      {/* <Image src="/images/shadow_of_orbinsky.png" className={styles.image11} alt="Top Left" width={250} height={250} /> */}

      <div className={styles.landing_location}>
        <Image
          src="/images/background_map.png"
          className={styles.image15}
          alt="Top Left"
          width={1500}
          height={800}
        />
        <div className={styles.horizontal_rectangle}></div>
        <a
          href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Design+and+Manufacturing,+Kancheepuram/@12.8379343,80.1347692,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525851fbcd3b6b:0x9f1067aa71e3898e!8m2!3d12.8379343!4d80.1373441!16s%2Fm%2F04144f8?entry=ttu"
          className={styles.location_text}
          target={"_blank"}
        >
          Find Us Here
        </a>
      </div>

      <div className={styles.about_landing}>
        <Image
          src="/images/car1.png"
          className={styles.image13}
          alt="Top Left"
          width={100}
          height={100}
        />
        <Image
          src="/images/car2.png"
          className={styles.image14}
          alt="Top Left"
          width={150}
          height={120}
        />
        <Link href={"/about"}>
          <Image
            src="/images/arrow.png"
            className={styles.image16}
            alt="Top Left"
            width={400}
            height={400}
          />
        </Link>
        {/* <Link href={"/about"}>
          <h1>Embark on the Evolutionary Odyssey: Tech Through Time </h1>
        </Link> */}

        <h2 className={styles.about_v}>About Vashisht</h2>
        <p className={styles.paragraph_landing}>
        Vashisht '24, the fifth edition of IIITDM Kancheepuram's Annual Technical Fest, is set to create an inclusive platform for engineering enthusiasts. Titled NEXUSAEON, the event is designed to celebrate intelligence and creativity in a warm and welcoming environment. From robotics to entrepreneurship, coding to design, workshops to hackathons, participants will have the opportunity to showcase their diverse talents. Mark your calendars for March 15th, 16th, and 17th, as we embark on this exhilarating journey of innovation and learning at Vashisht '24.
        </p>
        <Image
          src="/images/buildings.png"
          className={styles.image12}
          alt="Top Left"
          width={9000}
          height={30}
        />
      </div>
    </div>
  );
};

export default Page;
