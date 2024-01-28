// components/Simcard.js
"use client"

import React from 'react';
import styles from '../styles/simcard.module.css';
import Image from 'next/image';
import Link from "next/Link";
import { simcardData } from '/src/app/workshops/page';


const Simcard = ({ item }) => {
    const { text, imageSrc, eventName, eventId } = item;



    return (
        <main>
            <div className={styles.cardArrangement}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.svgContainer}>
                            <svg width="269" height="401" viewBox="0 0 269 401" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M71.3584 391.95H206.069L214.249 400.478L156 401L153 395H110.5L107.5 401H71.3584V391.95Z"
                                    fill="#E800D2"/>
                                <path d="M71.3584 338.692L79.7126 339.91V401H71.3584V338.692Z" fill="#E800D2"/>
                                <path
                                    d="M48.3846 331.034L79.5451 336.951L79.545 347.198L45.2514 339.454L48.3846 331.034Z"
                                    fill="#E800D2"/>
                                <path
                                    d="M6.96134 324.768L47.6868 333.296L46.1271 339.477L1.74076 329.294L6.96134 324.768Z"
                                    fill="#E800D2"/>
                                <path d="M0.000244141 271.51L9.05059 262.634L8.35441 323.724H0.000244141V271.51Z"
                                      fill="#E800D2"/>
                                <path
                                    d="M0.000244141 323.028H8.35441V329.293H6.00024C2.68653 329.293 0.000244141 326.607 0.000244141 323.293V323.028Z"
                                    fill="#E800D2"/>
                                <path
                                    d="M5.22144 170.042C5.22144 168.985 6.07858 168.128 7.13593 168.128C8.19328 168.128 9.05043 168.985 9.05043 170.042V269.074H5.22144V170.042Z"
                                    fill="#E800D2"/>
                                <path
                                    d="M3.48096 263.156C3.48096 264.118 2.70173 264.897 1.74051 264.897C0.779281 264.897 5.43594e-05 264.118 5.43594e-05 263.156V163.951H3.48096V263.156Z"
                                    fill="#E800D2"/>
                                <path d="M0.000244141 110.345L9.05059 100.076V159.425L0.000244141 170.39V110.345Z"
                                      fill="#E800D2"/>
                                <rect x="3.48096" y="60.9158" width="5.56944" height="48.7326" fill="#E800D2"/>
                                <path
                                    d="M0.000244141 9.05034C0.000244141 4.05197 4.05222 0 9.05059 0V66.8333C4.05222 66.8333 0.000244141 62.7813 0.000244141 57.783V9.05034Z"
                                    fill="#E800D2"/>
                                <path
                                    d="M9.05103 0H160.47L171.609 8.70226L108 9L106 4H64.0002L61.0002 9.05035H9.05103V0Z"
                                    fill="#E800D2"/>
                                <rect x="163.254" y="4.52521" width="76.9279" height="4.17708" rx="2.08854"
                                      fill="#E800D2"/>
                                <rect x="235.309" y="5.56952" width="4.87326" height="20.1892" rx="2.43663"
                                      fill="#E800D2"/>
                                <rect x="168.824" width="75.5356" height="3.4809" rx="1.74045" fill="#E800D2"/>
                                <rect x="240.879" width="3.82899" height="39.6823" rx="1.9145" fill="#E800D2"/>
                                <path d="M237.224 35.5051L244.708 24.5403V48.2104L237.224 43.1631V35.5051Z"
                                      fill="#E800D2"/>
                                <path
                                    d="M242.271 38.2899L268.378 54.302L261.068 58.305L244.185 47.8623L242.271 38.2899Z"
                                    fill="#E800D2"/>
                                <path
                                    d="M243.837 154.03L268.726 138.366L261.416 134.363L235.657 150.549L243.837 154.03Z"
                                    fill="#E800D2"/>
                                <path d="M268.378 54.302V71.1844L261.068 75.1874V57.2608L268.378 54.302Z"
                                      fill="#E800D2"/>
                                <path
                                    d="M268.726 138.366L268.552 118.351L261.242 114.348L261.068 134.537L268.726 138.366Z"
                                    fill="#E800D2"/>
                                <rect x="261.068" y="70.3143" width="3.13281" height="52.5616" fill="#E800D2"/>
                                <path d="M235.657 150.723H244.011V224.344L235.657 220.341V150.723Z" fill="#E800D2"/>
                                <rect x="239.834" y="222.43" width="4.17708" height="44.5555" fill="#E800D2"/>
                                <path d="M235.657 268.552L244.011 258.109V316.762L235.657 325.116V268.552Z"
                                      fill="#E800D2"/>
                                <rect x="235.657" y="317.806" width="3.4809" height="77.9722" rx="1.74045"
                                      fill="#E800D2"/>
                                <rect x="240.879" y="327.205" width="3.4809" height="73.447" rx="1.74045"
                                      fill="#E800D2"/>
                                <rect x="215.12" y="391.95" width="24.0182" height="3.82899" rx="1.9145"
                                      fill="#E800D2"/>
                                <rect x="198.76" y="396.823" width="45.5998" height="3.82899" rx="1.9145"
                                      fill="#E800D2"/>
                            </svg>

                        </div>
                        <div className={styles.cardBody}>
                            <p className={styles.cardInfo}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                {/* Remaining text */}
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={imageSrc} alt={`Simcard Image`} width={100} height={100}/>
                        </div>
                        <p className={styles.eventName}>{eventName}</p>
                        <div className={styles.textContainer}>
                            <p className={styles.cardText}>{text}</p>
                        </div>
                        <Link href={`/events/${eventId}`}>
                        <button className={styles.cardButton} >
                            REGISTER NOW
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Simcard;
