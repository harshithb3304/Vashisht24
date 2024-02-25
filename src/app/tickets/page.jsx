import React from "react";
import styles from "@/app/styles/tickets.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";
import Link from "next/link";
import Image from "next/image";
// import styles from "@app/styles/simcard.module.css"

const Tickets = () => {
  const ticketLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfNtovtn72ymlLEVnZPmVKNXdW1zzgRs-0jfhi4dHA7a-HpDw/viewform?usp=sf_link";
  return (
    <main>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.heading}>TICKETS</div>
        <div className={styles.content}>
          <p>
            Grab a pass now! to participate in in 50+ Vashisht events with over
            5L in prize money. Get exclusive access to Events, Talk shows, and
            Workshops with premier industry leaders!
          </p>
        </div>

        <div className={styles.venue}>
          <p>
            <span style={{ color: "#e800d2" }}>DATE:</span> MARCH 15 16 17
            {styles.eventPrize}
          </p>
          <p>
            <span style={{ color: "#e800d2" }}>TIME:</span> 10:00 AM
          </p>
          <p>
            <span style={{ color: "#e800d2" }}>VENUE:</span> IIITDM KANCHEEPURAM
          </p>
        </div>

        <div className={styles.ticket}>
          <a
            href={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Button1}
          >
            <Image
              src="/images/image-4.png"
              alt="Ticket"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
              className={styles.ticket_image}
            />
            <span className={styles.tooltip}>Grab The Tickets Now !!!</span>
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Tickets;
