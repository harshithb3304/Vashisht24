import React from 'react';
import Image from "next/image";
import styles from "/src/app/styles/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.foot}>
            <div className={styles.first}>
                <div className={styles.name1}><b>Address</b></div>
                <div>IIITDM Kancheepuram,<br/>Melaottaiyur, Nellikuppam Road, Near Kandigai<br/>Off Vandalur-Kelambakkam Road,<br/>Chennai<br/>Tamil
                    nadu, India - 600036
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.name}><b>Contact Us</b></div>
                <br/>
                <a href='/'>vashsiht.techfest@iiitdm.ac.in</a>
                <br/>
                <span>9642287347 | 9393107783 | 8197714735</span>

            </div>
            <div className={styles.third}>
                <div className={styles.name3}><br/><b>Connect with Us</b></div>
                <div className={styles.iconGap}><br/>
                    <Image alt="Instagram" src="/images/instagram.svg" width={25} height={25}/>
                    <Image alt="Linkedin" src="/images/linkedin.svg" width={25} height={25}/>
                    <Image  alt="Twitter" src="/images/twitter.svg" width={25} height={25}/>
                    <Image alt="Youtube" src="/images/youtube.svg" width={25} height={25}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
