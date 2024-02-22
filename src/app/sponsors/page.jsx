"use client";
import React from "react";
import styles from "@/app/styles/sponsors.module.css";
import Footer from "@/app/(components)/footer";
import Navbar from "../(components)/navbar";


{/* <main className={styles.sponsormain}> */}

const sponsorUrls = {
  previous: [
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/contentstack.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/cigniti.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/Cyient.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/unstop.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/indian_bank.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/hvtechnologies.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/dic-iiitdm.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/IEEE.png"
  ],
  current: [
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/unstop.png",
    "http://www.vashisht.iiitdm.ac.in/images/sponsors/indian_bank.png",
    "https://d8it4huxumps7.cloudfront.net/images/partners/new_organisation_image-Xg0f3yriOm1947829908Y6TPKcBffT.png?d=120x120"
  ]
};

const sponsors = () => {
  return (
    <div>

        <Navbar/>
    
      <div className= {styles.container}>
        
        <div className={styles.sponsors}>
          <h4>Previous Sponsors:</h4>
          <div className={styles.sponsor_images}>
            {sponsorUrls.previous.map((url, index) => (
              <img key={index} src={url} alt={`Previous Sponsor ${index + 1}`} />
            ))}
          </div>
          <h4>Current Sponsors:</h4>
          <div className={styles.sponsor_images}>
            {sponsorUrls.current.map((url, index) => (
              <img key={index} src={url} alt={`Current Sponsor ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className={styles.sponsorship_info}>
          <h2>Why Sponsor Us?</h2>
          <ul>
            <li>
              <p><b>Showcasing the Spectacle:</b> The grandeur of our fest culminates in spectacular pro shows spread across a thrilling 3-day journey. Imagine the blend of high-tech exhibitions with the flavor of fun and entertainment, making it the perfect setting for your brand to shine.</p>
            </li>
            <li>
              <p><b>Media and Engagement:</b> Our media strategy is not just about tech and entrepreneurial narratives; it is tailored to resonate with current trends and fun elements. With extensive social media campaigns, including engaging posts, trending challenges, and interactive content, ensure maximum visibility and engagement for your brand.</p>
            </li>
            <li>
              <p><b>Reach and Impact:</b> As a sponsor, your brand will not only reach a vast audience of tech enthusiasts and budding entrepreneurs but will also engage with them in a meaningful, trendsetting environment. It is about connecting your brand with the right talent and consumers in a setting that is both technically enriching and entertaining.</p>
            </li>
          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
}


export default sponsors;
