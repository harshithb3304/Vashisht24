import React from "react";
import Navbar from "@/app/(components)/navbar";
import styles from "@/app/styles/about.module.css";
import Footer from "@/app/(components)/footer";
import Image from "next/image";

import Link from "next/link";
const About = ()=>{
    return (
        <main>
            <Navbar/>
            <div class={styles.container}>
                <div className={styles.title} >
                    <div className="images">
                        <Link href="/">
                        <Image
                            
                            src="/images/iiitdm_logo-removebg-preview.png"
                            alt="IIITDM-LOGO"
                            width={100}
                            height={100}
                            />
                        </Link>
                    </div>
                    <div className={styles.heading}>
                        About IIITDM Kancheepuram
                    </div>
                </div>
            <div className={styles.para}> 
                <ul>
                    <li>
                        <p>Kancheepuram is a Centre of Excellence for technical education and research established in 2007 by the Ministry of Education, Government of India to pursue design and manufacturing oriented engineering education and research and to promote the competitive advantage of Indian products in global markets.</p>
                    </li>
                    <li>
                        <p>IIITDM is envisioned as an academic institution of excellence that would facilitate and promote the competitive advantage of Indian products in global markets. IIITDM will serve as an inter-disciplinary institution for education and research in the area of Product Lifecycle Management (PLM) encompassing design and manufacturing using state of the art concepts, tools, processes and practices of the industry world over.</p>
                    </li>
                    <li>
                        <p>IIITDM is located on a 51 acre campus on the outskirts of Chennai, off the Vandalur-Kelambakkam road. It is a fully residential campus with all students residing within the campus. The institute offers academic and research programs that integrate engineering design, manufacturing and management with information technology. The institute offers undergraduate and postgraduate programs which focus on IT, design and manufacturing in engineering sectors.</p>
                    </li>
                </ul>
            </div>
            </div>
            <Footer />
        </main>
    )
}

export default About;