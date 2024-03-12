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
          Secure your entry to Vashisht 2024. Passes required for access to all events, talks, and workshops. Reserve yours today!
          </p>
        </div>

        <div className={styles.venue}>
          <p>
            
          </p>
          <p>
            
          </p>
          <p>
            
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
