import * as React from 'react';
import * as styles from './top.module.css';

const Top = () => {
    return (
        <div className={styles.top}>
            <div className={styles.topContainer}>               
                <img src="images/index/COFFEECAFE NAGISA.png" alt="top Text" className={styles.topTextImage}/>
            </div>
        </div>
    );
};

export default Top;
