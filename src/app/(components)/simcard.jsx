import React from 'react';
import styles from '../styles/simcard.module.css';
import Image from "next/image";

const Simcard = () => {
        return (
            <main>
            <div>
                 <div className={styles.cardContainer}>
                        <div className={styles.cardText}>HI </div>
                        <div className={styles.card}>
                                <Image src={"/images/simcard.svg"} alt={"SVG Image"} layout = "fill" objectFit= "contain"/>
                        </div>
                    </div>
            </div>
            </main>
        );
};

export default Simcard;
