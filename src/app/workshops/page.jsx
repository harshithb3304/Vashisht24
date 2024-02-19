// pages/Page.js
import React from "react";
import styles from "@/app/styles/workshops.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";

const simcardData = [
  {
    eventId: "workshop1",
    eventName: "WORKSHOP 1",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Join us for an introductory workshop on React. Learn the basics and get started with building web applications.",
    eventPrize: "₹100000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop2",
    eventName: "WORKSHOP 2",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop3",
    eventName: "WORKSHOP 3",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop4",
    eventName: "WORKSHOP 4",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop5",
    eventName: "WORKSHOP 5",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop6",
    eventName: "WORKSHOP 6",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop7",
    eventName: "WORKSHOP 7",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop8",
    eventName: "WORKSHOP 8",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop9",
    eventName: "WORKSHOP 9",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  // Add more simcard data as needed
];


const Page = () => {
  return (
    <main className={styles.workshopMain}>
      <div>
        <Navbar />
      </div>

      <div className={styles.workshopInfo}>
        <div className={styles.workshopHeading}>WORKSHOPS</div>
        <div className={styles.workshopContent}>
          Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night,
          Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups.
          Limited seats – seize the chance to blend learning with entertainment!
        </div>
      </div>
      <div className={styles.cardLayout}>
        {simcardData.map((item, index) => (
          <Simcard key={item.eventId} item={item} />
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default Page;
export { simcardData };
