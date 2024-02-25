// pages/Page.js
import React from "react";
import styles from "@/app/styles/store.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";
import Storesim from "../(components)/storesim";
const storeData = [
  {
    merchId: "store1",
    eventName: "WHITE T-SHIRT ",
    imageSrc2: "/images/whiteTshirt.png",
    imageSrc: "/images/whiteTshirt.png",
    eventInfo:
      "This stylish white t-shirt features an abstract, modern design with geometric shapes and typography in shades of blue, orange, and black. The words “NEXUS” and “AEON” add intrigue with nothing on back.",
    merchprice: "₹100000",
    eventLink: "/",
  },
  {
    merchId: "store2",
    eventName: "BLACK T SHIRT",
    imageSrc2: "/images/Black-T-Shirt.png",
    imageSrc: "/images/Black-T-Shirt.png",
    eventInfo:
      "This black t-shirt features a minimalist design with a checkbox and “I m not a robot” on the front, and an intricate blue robotic head design labeled “NEXUS AEON” on the back",
    merchprice: "₹019830",
    eventLink: "/",
  },
  {
    merchId: "store3",
    eventName: "HOODIE",
    imageSrc: "/images/Merch-removebg-preview.png",
    imageSrc2: "/images/Merch-removebg-preview.png",
    eventInfo:
      "This black varsity jacket is a blend of classic collegiate style and modern design. It features a solid black front with a bold white “ V,” striped cuffs, and white pockets. The back showcases an intricate “NEXUS REON” graphic. ",
    merchprice: "₹20000000",
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
    <main className={styles.storeMain}>
      <Navbar />
      <div className={styles.storeInfo}>
        <div className={styles.storeHeading}>STORE</div>
        <div className={styles.storeContent}>
          Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night,
          Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups.
          Limited seats - seize the chance to blend learning with entertainment!
        </div>
      </div>
      <div className={styles.cardLayout}>
        {storeData.map((item, index) => (
          <Storesim key={index} item={item} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Page;
export { storeData };
