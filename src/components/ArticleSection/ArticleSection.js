import * as React from 'react';
import * as styles from './ArticleSection.module.css';

const ArticleSection = () => {
    return (
        <div className={styles.articleSection}>
            <div className={styles.articleContainer}>
                <div className={styles.heading}>
                    <h2>見出し見出し</h2>
                </div>
                <div className={styles.subheading}>
                    <h3>サブ見出し<br />サブ見出し獅子</h3>
                </div>
                <div className={styles.content}>
                    <p>
                        ここは文章ここは文章。ここは文章こ<br/>
                        ここは文章ここは文章。ここは文章こ
                    </p>
                    <p>
                        ここは文章ここは文章。ここは文章こ<br/>
                        ここは文章ここは文章。ここは文章こ
                    </p>
                    <p>
                        ここは文章ここは文章。ここは文章こ<br/>
                        ここは文章ここは文章。ここは文章こ<br/>
                        ここは文章ここは文章。ここは文章こ
                    </p>
                    <p>
                        ここは文章ここは文章。ここは文章こ<br/>
                        ここは文章ここは文章。ここは文章こ
                    </p>
                    <p>
                        ここは文章ここは文章。ここは文章こ<br/>
                        ここは文章ここは文章。ここは文章こ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleSection;
