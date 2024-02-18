// pages/Page.js
import React from 'react';
import styles from '@/app/styles/accommodation.module.css';
import Simcard from '/src/app/(components)/simcard';
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";

const accommodationData = [
    {
        eventId: 'accomodation2',
        eventName: 'ACCOMMODATION 1',
        imageSrc: '/images/ball.png',
        eventInfo: 'Join us for an introductory workshop on React. Learn the basics and get started with building web applications.',
        eventPrize: "₹100000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",

    },
    {
        eventId: 'accomodation1',
        eventName: 'ACCOMMODATION 2',
        imageSrc: '/images/ball.png',
        eventInfo: 'Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.',
        eventPrize: "₹20000000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",
    },
    // Add more simcard data as needed
];
const Page = () => {


    const contentStyles = {
      

    };
    return (
        <main className={styles.accommodationMain}>
            <Navbar/>
            <div className={styles.accommodationInfo}>
                <div className={styles.accomodationHeading}>ACCOMMODATION</div>
                <div className={styles.accommodationContent}>
                    Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night, Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups. Limited seats – seize the chance to blend learning with entertainment!
                </div>
            </div>
            <div className={styles.cardLayout}>
                {accommodationData.map((item, index) => (
                    <Simcard key={index} item={item} />
                ))}
            </div>
            <Footer/>
        </main>
    );
};

export default Page;
export {accommodationData };
