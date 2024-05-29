import * as React from 'react';
import * as styles from './ArticleSection.module.css';

const ArticleSection = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`${styles.articleSection} ${isVisible ? styles.visible : ''}`}
        >
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
