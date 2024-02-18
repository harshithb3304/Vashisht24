// pages/Page.js
import React from 'react';
import styles from '@/app/styles/events.module.css';
import Simcard from '/src/app/(components)/simcard';
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";
const events = [
    {
        eventId: 'event1',
        eventName: 'EVENT 1',
        imageSrc: '/images/ball.png',
        eventInfo: 'Join us for an introductory workshop on React. Learn the basics and get started with building web applications.',
        eventPrize: "₹100000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",

    },
    {
        eventId: 'event2',
        eventName: 'EVENT 2',
        imageSrc: '/images/ball.png',
        eventInfo: 'Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.',
        eventPrize: "₹20000000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",
    },
    {
        eventId: 'event3',
        eventName: 'EVENT 3',
        imageSrc: '/images/ball.png',
        eventInfo: 'Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.',
        eventPrize: "₹20000000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",
    },
    {
        eventId: 'event4',
        eventName: 'EVENT 4',
        imageSrc: '/images/ball.png',
        eventInfo: 'Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.',
        eventPrize: "₹20000000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",
    },
    {
        eventId: 'event5',
        eventName: 'EVENT 5',
        imageSrc: '/images/ball.png',
        eventInfo: 'Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.',
        eventPrize: "₹20000000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",
    },
    {
        eventId: 'event6',
        eventName: 'EVENT 6',
        imageSrc: '/images/ball.png',
        eventInfo: 'Explore advanced CSS techniques and best practices. Dive into responsive design, animations, and more.',
        eventPrize: "₹20000000",
        eventDate : "16th February 2024",
        eventTime : "10:00 PM",
    },

    // Add more simcard data as needed
];

const Page = () => {
    return (
        <main className={styles.eventsMain}>
            <Navbar/>
            <div className={styles.eventsInfo}>
                <div className={styles.eventsHeading}>EVENTS</div>
                <div className={styles.eventsContent}>
                    Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night, Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups. Limited seats – seize the chance to blend learning with entertainment!
                </div>
            </div>
            <div className={styles.cardLayout}>
                {events.map((item, index) => (
                    <Simcard key={index.eventId} item={item} />
                ))}
            </div>
            <Footer/>
        </main>
    );
};

export default Page;
export {events };
