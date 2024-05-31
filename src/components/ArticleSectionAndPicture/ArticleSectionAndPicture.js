import * as React from 'react';
import * as styles from './ArticleSectionAndPicture.module.css';


const ArticleSectionAndPicture = ({ heading, subheading, description}) => {
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
                        <h2>{heading}</h2>
                    </div>
                    <div className={styles.subheading}>
                        <h3>{subheading}</h3>
                    </div>
                    <div className={styles.text}>
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            
        </div>
    );
};

export default ArticleSectionAndPicture;
