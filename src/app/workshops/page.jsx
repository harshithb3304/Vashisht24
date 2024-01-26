// pages/Page.js
import React from 'react';
import styles from '@/app/styles/workshops.module.css';
import Simcard from '/src/app/(components)/simcard';

const Page = () => {
    const simcardData = [
        { text: 'WORKSHOP 1', imageSrc: '/images/NexusAeonBlack.png' },
        { text: 'WORKSHOP 2', imageSrc: '/images/NexusAeonBnW.png' },
        { text: 'WORKSHOP 3', imageSrc: '/images/NexusAeonWhite.png' },
    ];
    const headingStyles = {
        fontFamily: 'VCR OSD Mono, monospace',
        fontSize: '30px',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0em',
        textAlign: 'left',
        textDecorationColor: '#FFFFFF',
        color: '#FFFFFF',
        display: 'block',

    };

    const contentStyles = {
        fontFamily: 'Anonymous Pro, monospace',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0e',
        textAlign: 'center',
        width: '807px',
        height: '100px',
        top: '248px',
        left: '236px',
        textDecorationColor: '#FFFFFF',
        color: '#FFFFFF',
        display: 'block',
        marginTop: '30px'

    };
    return (
        <main className={styles.workshopMain}>
            <div className={styles.workshopInfo}>
                <div style={headingStyles}>WORKSHOPS</div>
                <div style={contentStyles}>
                    Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night, Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups. Limited seats – seize the chance to blend learning with entertainment!
                </div>
            </div>
            <div className={styles.cardLayout}>
                {simcardData.map((item, index) => (
                    <Simcard key={index} item={item} />
                ))}
            </div>
        </main>
    );
};

export default Page;
