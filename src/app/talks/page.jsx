// pages/Page.js
import React from "react";
import styles from "@/app/styles/talks.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";
const talkData = [
  {
    eventId: "talk1",
    eventName: "TALK 1",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Join us for an introductory workshop on React. Learn the basics and get started with building web applications.",
    eventPrize: "₹100000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "talk2",
    eventName: "TALK 2",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "talk3",
    eventName: "TALK 3",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "talk4",
    eventName: "TALK 4",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "talk5",
    eventName: "TALK 5",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.",
    eventPrize: "₹20000000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "talk6",
    eventName: "TALK 6",
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
  const simcardData = [
    { text: "WORKSHOP 1", imageSrc: "/images/NexusAeonBlack.png" },
    { text: "WORKSHOP 2", imageSrc: "/images/NexusAeonBnW.png" },
    { text: "WORKSHOP 3", imageSrc: "/images/NexusAeonWhite.png" },
  ];

  return (
    <main className={styles.talksMain}>
      <Navbar />
      <div className={styles.talksInfo}>
        <div className={styles.talksHeading}>TALKS</div>
        <div className={styles.talksContent}>
          Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night,
          Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups.
          Limited seats – seize the chance to blend learning with entertainment!
        </div>
      </div>
      <div className={styles.cardLayout}>
        {talkData.map((item, index) => (
          <Simcard key={index} item={item} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Page;
export { talkData };
