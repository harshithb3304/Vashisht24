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
          IIITDM Kancheepuram provides excellent accommodation to its students.
          The students are provided with all the amenities so that their stay
          here becomes a worthwhile experience. At institute there is a good
          blend of academic, cultural, and social experience to all the
          students, scholars, staffs and faculties. Various co-curricular
          activities such as a coding contest, design challenges and etc, are
          coordinated by the respective clubs all throughout the year. Various
          sports tournaments such as basketball, cricket, badminton, etc are
          coordinated by the respective hostel sports secretary all throughout
          the year. Students also enjoy several cultural activities throughout
          the years conducted at hostel level. In addition to this, many
          cultural and social activities also happen during the academic year.
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.accomodationHeading}>ACCOMMODATION POLICY</div>
        <br />
        <div className={styles.accommodationPolicy}>
          1. Accommodation is allotted purely on availability and need basis as
          per the discretion of the Hostel Administration and on condition that
          the student agrees to abide by all the rules and regulations of the
          hostels of IIITDM.
          <br />
          <br />
          2. The student allotted a room in the hostel will be fully responsible
          for the furniture and electrical fittings/provisions made in the room.
          Damage/ misuse of facilities provided in the hostel rooms and common
          areas, mess and dining areas will attract penalty.
          <br />
          <br />
          3. Students must occupy rooms specifically allotted to them. No
          request for change of rooms will be entertained unless otherwise
          merited on genuine grounds decided by institute authorities.
          <br />
          <br />
          4. All residents must maintain standards of behavior expected of
          students of a prestigious Institution such as ours. All residents are
          required to carry their valid Identity Cards issued to them by the
          VASHISHT team.
          <br />
          <br />
          5. The students are advised not to keep large amount of cash or
          valuables in the room. The student is responsible for the safety of
          his/her belongings inside the room.
          <br />
          <br />
          6. Cooking inside the hostel rooms is strictly prohibited. The
          electric points provided in each room are to be used only for mobile
          phone, laptop charging and mosquito repellant. Use of any other
          electric appliances in the hostel is strictly prohibited.
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
