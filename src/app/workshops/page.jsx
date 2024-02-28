// pages/Page.js
import React from "react";
import styles from "@/app/styles/workshops.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";

const simcardData = [
  {
    eventId: "workshop1",
    eventName: "ALTAIR ENGINEERING",
    imageSrc: "/images/talk.png",
    eventInfo:
      "Join us for an enlightening talk on data science and machine learning applications from Altair. Gain insights into practical applications across industries and explore the dynamic intersection of these technologies. Explore exciting internship opportunities at Altair, offering a chance to contribute to cutting-edge projects and deepen your understanding of the field. Don't miss this unique opportunity to advance your knowledge.",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop2",
    eventName: "INDUSTRY EXPERT TALK",
    imageSrc: "/images/talk.png",
    eventInfo:
      "Join us for an enlightening industry expert talk organized by the Society of Automotive Engineers (SAE) club at our college. This event will delve into the cutting-edge advancements and challenges within the automotive engineering realm, reflecting SAE's core mission of fostering innovation and excellence in mobility engineering. Our distinguished speaker, a seasoned professional with extensive experience in the automotive industry, will share valuable insights, emerging trends, and future prospects shaping the landscape of automotive technology",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop3",
    eventName: "TECH CONNECT",
    imageSrc: "/images/talk.png",
    eventInfo:
      "Experience the power of connection at 'Tech Connect,' where brilliance ignites inspiration! Immerse yourself in an illuminating lecture by a distinguished thought leader, unveiling cutting-edge insights and trends shaping the tech landscape. Elevate your understanding, forge meaningful connections, and embark on a journey of innovation and possibility!",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop4",
    eventName: "GUEST LECTURES ON SPACE AND ENGINEERING",
    imageSrc: "/images/talk.png",
    eventInfo:
      "Three esteemed guest lecturers will be invited to speak at the upcoming event focusing on manufacturing and space exploration, captivating the curiosity of the students with their insightful perspectives and expertise. Their engaging presentations will delve into the intricate connections between these two fascinating fields, shedding light on cutting-edge technologies, groundbreaking research, and the future possibilities awaiting exploration",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop5",
    eventName: "AAKASHVANI",
    imageSrc: "/images/talk.png",
    eventInfo:
      "Join us for an enlightening talk on Aero Designing, where DR. N. SURESHKUMAR, Chairman 360 Group of Companies, a seasoned expert in the field, will share insights into the fascinating world of aircraft design and innovation.",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  // Add more simcard data as needed
];
for (let i = 0; i < simcardData.length; i++) {
  // Add the imageSrc2 property with a similar path as imageSrc but with an additional element
  simcardData[i].imageSrc2 = simcardData[i].imageSrc.replace(".png", ".png");
}

const Page = () => {
  return (
    <main className={styles.workshopMain}>
      <div>
        <Navbar />
      </div>

      <div className={styles.workshopInfo}>
        <div className={styles.workshopHeading}>WORKSHOPS & TALKS</div>
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
