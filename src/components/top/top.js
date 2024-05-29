import * as React from 'react';
import * as styles from './top.module.css';

const Top = () => {
    return (
        <div className={styles.top}>
            <div className={styles.topContainer}>
                <img src="images/index/brewing-pour-over-coffee.sp.jpg" alt="coffee" className={styles.topImage}/>
                <img src="images/index/top-text.png" alt="top Text" className={styles.topTextImage}/>
                
            </div>
        </div>
    );
};

export default Top;
