// pages/Page.js
import React from "react";
import styles from "@/app/styles/workshops.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";

const simcardData = [
  {
    eventId: "workshop1",
    eventName: "INAUGRAL CEREMONY FOR VASHISHT",
    imageSrc: "/images/debi.jpeg",
    eventInfo:
      "Debi Prasad Dash, the visionary force behind iconic projects like the Vandebharat (T18), boasts over three decades of exemplary expertise in electrical engineering and project management within the railway sector. As the former General Manager at Chittaranjan Locomotive Works (CLW), his leadership propelled the factory to unprecedented heights, including the groundbreaking achievement of manufacturing 300 locomotives in record time. Mr. Dash's pivotal role in initiatives such as the Vandebharat project underscores his dedication to driving innovation and excellence in railway transportation, shaping the landscape of sustainable development within the industry.",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop2",
    eventName: "MASTERING THE ART OF UI/UX",
    imageSrc: "/images/mukesh_kumar.jpeg",
    eventInfo:
      "Mr. Mukesh Kumar Ranjan graduated from IIT Guwahati. He has diverse experience of designing digital products of 5+ years of experience at various organizations like Yocket, Economic Times, Dineout, EdgeVerve, Cubastion Consulting and Cloudesign in the field of Ed Tech, Digital News,Food and beverages, and Al and Automation.",
    eventPrize: "NULL",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/college-fests/vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-197310",
  },
  {
    eventId: "workshop3",
    eventName: "TECH CONNECT",
    imageSrc: "/images/sudeesh.jpeg",
    eventInfo:
      "Sudeesh is a competent management professional and Data Scientist with over 24 years of cross functional experience that includes Machine Learning, Deep Learning, Forecasting, Optimization, Simulation, Predictive modeling, business analytics, operations management and consulting in data science projects and development.",
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
    imageSrc: "/images/elangovan.jpeg",
    eventInfo:
      "With 42 years of experience, including 8 in international Aerospace R&D at Vikram Sarabhai Space Center, ISRO, Prof. R.R. Elangovan excels in Marketing and Implementing Satellite Communication Projects in the Middle East and Africa. He established Aeronautical Engineering Departments across three countries, holding pivotal roles like Scientist Engineer, Project Manager, and Professor.",
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
