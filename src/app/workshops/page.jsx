// pages/Page.js
import React from 'react';
import styles from '@/app/styles/workshops.module.css';
import Simcard from '/src/app/(components)/simcard';

const Page = () => {
    const simcardData = [
        { text: 'WORKSHOP 1', imageSrc: '/images/NexusAeonBlack.png' },
        { text: 'WORKSHOP 2', imageSrc: '/images/NexusAeonBnW.png' },
        { text: 'WORKSHOP 3', imageSrc: '/images/NexusAeonWhite.png' },
    ];

    return (
        <main className={styles.blablabla}>
            <div>

            </div>
            <div className={styles.blablabla}>
                {simcardData.map((item, index) => (
                    <Simcard key={index} item={item} />
                ))}
            </div>
        </main>
    );
};

export default Page;
