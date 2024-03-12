"use client";
import React, { useState } from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const linkStyles = {
    fontFamily: "VCR OSD Mono, monospace",
    fontSize: "25px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    textDecorationColor: "#E800D2",
    color: "#E800D2",
  };

  return (
    <main>
      <div className={styles.container}>
        <button
          className={`${styles.hamburgerIcon} ${
            isMobileMenuOpen ? styles.mobileView : ""
          }`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <div className={styles.vashishtlogo}>
          <Link href="/">
            <Image
              src="/images/VashishtLogo.png"
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
        </div>

        <div
          className={`${styles.nav} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.navbarArrangement}>
            <Link href={"/about"} style={linkStyles}>
              ABOUT
            </Link>
            <Link href={"/workshops"} style={linkStyles}>
              WORKSHOPS & TALKS
            </Link>
            {/* <Link href={"/talks"} style={linkStyles}>
              TALKS
            </Link> */}
            <Link href={"/events"} style={linkStyles}>
              EVENTS
            </Link>
            <Link href={"/accommodation"} style={linkStyles}>
              ACCOMMODATION
            </Link>
            <Link href={"/store"} style={linkStyles}>
              MERCHANDISE
            </Link>

            <Link href={"/sponsors"} style={linkStyles}>
              SPONSORS
            </Link>
            <Link href={"/tickets"} style={linkStyles}>
              TICKETS
            </Link>
          </div>
        </div>
        <div className={styles.nexuslogo}>
          <Link href="/">
            <Image
              src="/images/NexusAeonBnW.png"
              alt="LogoNexus"
              width={60}
              height={60}
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
