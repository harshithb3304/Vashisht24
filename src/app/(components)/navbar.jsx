import React from 'react';
import styles from '@/app/styles/navbar.module.css';
import Link from "next/link";
import Image from "next/image";

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
        <main>

            <div className={styles.container}>
                <div className={styles.nexuslogo}>
                    <Link href={"/"}>
                    <Image src={"/images/NexusAeonBnW.png"} alt={"LogoNexus"} width={60} height={60}/>
                    </Link>
                </div>

                <div className={styles.nav}>
                    <div>
                        <Link href={"/"}>
                            <Image src={"/images/VashishtLogo.png"} alt={"Logo"} width={20} height={20}/>
                        </Link>
                    </div>
                    <div className={styles.navbarArrangement} style={{
                        fontFamily: 'VCR OSD Mono',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0em',
                        textAlign: 'left'
                    }}>
                        <Link href={"/workshops"} style={linkStyles}>WORKSHOPS</Link>
                        <Link href={"/talks"} style={linkStyles}>TALKS</Link>
                        <Link href={"/events"} style={linkStyles}>EVENTS</Link>
                        <Link href={"/accommodation"} style={linkStyles}>ACCOMMODATION</Link>
                        <Link href={"/store"} style={linkStyles}>STORE</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Navbar;
