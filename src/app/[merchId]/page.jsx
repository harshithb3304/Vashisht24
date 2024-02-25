import React from "react";
import Image from "next/image";
import { storeData } from "@/app/store/page";
import styles from "/src/app/styles/[merch].module.css";
import Navbar from "@/app/(components)/navbar";
import Link from "next/link";
import Footer from "@/app/(components)/footer";

const EventDetails = ({ params }) => {
  // const eventId = params.eventId;
  // const event = simcardData.find((item) => item.eventId === eventId);
  // const eventsEventData = events.find((item) => item.eventId === eventId);
  const eventId = params.eventId;
  const combinedData = [...storeData];
  const event = combinedData.find((item) => item.eventId === eventId);

  return (
    <main>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <h1 className={styles.eventName}>{event.eventName}</h1>
        <Image
          className={styles.image}
          src={event.imageSrc}
          alt={event.eventName}
          width={400}
          height={400}
        />
        <p className={styles.eventContent}>{event.eventInfo}</p>
        <div className={styles.eventContent1}>
          <div className={styles.eventContent1}>
            <p>
              <span style={{ color: "purple" }}>MERCHANDISE PRICE:</span>{" "}
              {event.merchprice}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={event.eventLink} target="_blank">
          <button className={styles.registerButton}>REGISTER NOW</button>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export async function generateStaticParams() {
  const combinedData = [...storeData];
  const paths = combinedData.map((event) => ({ eventId: event.eventId }));
  return paths;
  // const paths = simcardData.map(event => ( { eventId: event.eventId } ));
  // const pathsEvents = events.map(event => ({ eventId: event.eventId }));
  // return  [...paths, ...pathsEvents];
}

// export async function getStaticProps({ params }) {
//     const eventData = await fetchEventData(params.eventId);
//     return {
//         props: {
//             eventData,
//         },
//     };
// }

export default EventDetails;
