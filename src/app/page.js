import React from 'react';
import styles from '@/app/styles/page.module.css'
import { Anonymous_Pro } from "next/dist/compiled/@next/font/dist/google";
import Link from "next/link";

const Page = () => {
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
        <div className={styles.pageMain}>
            <div style={headingStyles}>About Vashisht</div>
            <div style={contentStyles}>
                Vashisht 2024 is not just an event. It is a dynamic platform designed to amplify engineering aspirations. We invite tech enthusiasts to showcase their intelligence and creativity in a highly competitive environment. Nexus Aeon aims to redefine the boundaries of imagination and technology, creating an immersive experience for all participants.
            </div>
            <div>
                <Link href={"/"}>
                    <button className={styles.buttonStyle}>
                        <p>REGISTER NOW</p>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Page;
