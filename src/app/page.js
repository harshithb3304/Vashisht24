import React from 'react';
import styles from '@/app/styles/page.module.css'
import Simcard from "@/app/(components)/simcard";
const Page = () => {
    const simcardData = [
        { text: 'Card 1', imageSrc: '/images/simcard.svg' },
        { text: 'Card 2', imageSrc: '/images/simcard.svg' },

    ]
    return (
        <div className={styles.main}>
            <Simcard data={simcardData} />
        </div>
    );
};

export default Page;