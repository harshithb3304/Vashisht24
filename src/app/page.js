"use client"
import React, { useState, useEffect } from 'react';
import styles from '@/app/styles/page.module.css';
import Link from 'next/link';

const Page = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const headingStyles = {
        fontFamily: 'VCR OSD Mono, monospace',
        fontSize: isMobile ? '24px' : '30px',
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
        fontSize: isMobile ? '16px' : '20px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0e',
        textAlign: 'center',
        width: isMobile ? '100%' : '807px', // Adjust width for mobile
        margin: '0 auto', // Center align content
        marginTop: '30px',
        color: "#FFFFFF"
    };
    const buttonStyles = {
        fontFamily: 'VCR OSD Mono, monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 15px',
        backgroundColor: '#E800D2',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '10%',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        marginTop: isMobile ? '30px' : '100px',
        position: 'relative',
        left: isMobile ? '0' : '100%',  // Center align the button
        transform: isMobile ? 'translateX(0)' : 'translateX(-50%)',  // Center align the button
    };


    const buttonClassName = isMobile ? `${styles.buttonStyle} ${styles.buttonStyleMobile}` : styles.buttonStyle;

    return (
        <div className={styles.pageMain}>
            <div style={headingStyles}>About Vashisht</div>
            <div style={contentStyles}>
                Vashisht 2024 is not just an event. It is a dynamic platform designed to amplify engineering aspirations. We invite tech enthusiasts to showcase their intelligence and creativity in a highly competitive environment. Nexus Aeon aims to redefine the boundaries of imagination and technology, creating an immersive experience for all participants.
            </div>
            <div>
                <Link href={"/"}>
                    <button className={buttonClassName}>
                        <p>REGISTER NOW</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
