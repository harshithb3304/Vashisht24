import React from "react";
import styles from "@/app/styles/accommodation.module.css";
import Simcard from "/src/app/(components)/simcard";
import Link from "next/link";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";
// import styles from "@app/styles/simcard.module.css"

const accommodationData = [
  {
    eventId: "accomodation2",
    eventName: "ACCOMMODATION 1",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Join us for an introductory workshop on React. Learn the basics and get started with building web applications.",
    eventPrize: "₹100000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "accomodation1",
    eventName: "ACCOMMODATION 2",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  // Add more simcard data as needed
];
const Page = () => {
  const contentStyles = {};
  return (
    <main className={styles.accommodationMain}>
      <Navbar />
      <div className={styles.accommodationInfo}>
        <div className={styles.accomodationHeading}>ACCOMMODATION</div>
        <div className={styles.accommodationContent}>
        Rest easy at IIITDM Kancheepuram. Limited accommodation available on a first-come, first-served basis. Book now to secure your stay! (Accommodation passes required for Vashisht access)
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.accomodationHeading}>ACCOMMODATION POLICY</div>
        <br />
        <div className={styles.accommodationPolicy}>
        Every person has to get a pass to attend any events at Vashisht. 
        Limited Accommodation shall be provided on first come first serve basis, please ensure you choose the number of days before booking, (The accommodation amount for three days is ₹800 and for single day it is ₹300 at IIITDM Kancheepuram campus). Kindly note, we have limited accommodation for people. The accommodation shall be from 12pm during check in and 2pm for check out.
          <br />
          <br />
        
          <br />
          <br />
         
          <br />
          <br />
          
          <br />
          <br />
          
          <br />
          <br />
          
        </div>
        <br />
      </div>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdhKP2H_7uCjpzh075_NwKfvVWv9iwxiDPf69ernCzl7i4YaA/viewform?usp=sf_link"
        target="_blank"
      >
        <button className={styles.cardButton}>BOOK YOUR ACCOMIDATION</button>
      </Link>
      <Footer />
    </main>
  );
};

export default Page;
export { accommodationData };
