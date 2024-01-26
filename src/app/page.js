import React from 'react';
import styles from '@/app/styles/page.module.css'
import Simcard from "@/app/(components)/simcard";
const Page = () => {
    return (
        <div className={styles.main}>
          <Simcard/>
        </div>
    );
};

export default Page;