"use client";
import React from "react";
import styles from "@/app/styles/sponsors.module.css";
import Footer from "@/app/(components)/footer";
import Navbar from "../(components)/navbar";

{
  /* <main className={styles.sponsormain}> */
}

const sponsorUrls = {
  previous: [
    "/images/contentstack.png",
    "/images/cigniti.png",
    "/images/Cyient.png",
    "./images/unstop.png",
    "./images/indian bank.png",
    "/images/hvtechnologies.png",
    "/images/dic-iiitdm.png",
    "/images/IEEE.jpeg",
  ],
  current: [
    "./images/360flyingclub.png",
    "./images/indian bank.png",
    "./images/spicmacay.png",
    "./images/unstop.png",
    "./images/vyza solutions.png",
    "./images/OSSEB.png",
  ],
};

const sponsors = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.sponsors}>
          <h4>Current Sponsors:</h4>
          <div className={styles.sponsor_images}>
            {sponsorUrls.current.map((url, index) => (
              <img key={index} src={url} alt={`Current Sponsor ${index + 1}`} />
            ))}
          </div>
          <h4>Previous Sponsors:</h4>
          <div className={styles.sponsor_images}>
            {sponsorUrls.previous.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Previous Sponsor ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.sponsorship_info}>
          <h2>Why Sponsor Us?</h2>
          <ul>
            <li>
              <p>
                <b>Showcasing the Spectacle:</b> The grandeur of our fest
                culminates in spectacular pro shows spread across a thrilling
                3-day journey. Imagine the blend of high-tech exhibitions with
                the flavor of fun and entertainment, making it the perfect
                setting for your brand to shine.
              </p>
            </li>
            <li>
              <p>
                <b>Media and Engagement:</b> Our media strategy is not just
                about tech and entrepreneurial narratives; it is tailored to
                resonate with current trends and fun elements. With extensive
                social media campaigns, including engaging posts, trending
                challenges, and interactive content, ensure maximum visibility
                and engagement for your brand.
              </p>
            </li>
            <li>
              <p>
                <b>Reach and Impact:</b> As a sponsor, your brand will not only
                reach a vast audience of tech enthusiasts and budding
                entrepreneurs but will also engage with them in a meaningful,
                trendsetting environment. It is about connecting your brand with
                the right talent and consumers in a setting that is both
                technically enriching and entertaining.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default sponsors;
