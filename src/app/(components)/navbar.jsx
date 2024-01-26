import React from 'react';
import styles from '@/app/styles/navbar.module.css';
import Link from "next/link";

const Navbar = () => {
    const linkStyles = {
        fontFamily: 'VCR OSD Mono, monospace',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0em',
        textAlign: 'left',
        textDecorationColor: '#E800D2',
        color: '#E800D2',
    };
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.navbarArrangement} style={{ fontFamily: 'VCR OSD Mono', fontSize: '20px', fontWeight: 400, lineHeight: '20px', letterSpacing: '0em', textAlign: 'left' }}>
                    <Link href={"/"}  style={linkStyles}>WORKSHOP</Link>
                    <Link href={"/"}  style={linkStyles}>TALKS</Link>
                    <Link href={"/"}  style={linkStyles}>EVENTS</Link>
                    <Link href={"/"}  style={linkStyles} >ACCOMMODATION</Link>
                    <Link href={"/"}  style={linkStyles}>STORE</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
