import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import { FaArrowRight, FaHouse } from 'react-icons/fa6';

const NotFound = () => {
    return (
        <div className={styles.notFoundPage}>
            {/* Ambient Lighting Orbs */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>

            <div className={styles.container}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.desc}>
                    The page you are looking for doesn't exist, has been moved, or the link may have expired. Let's get you back to the right place.
                </p>

                <div className={styles.btnGroup}>
                    <Link to="/" className={styles.homeBtn}>
                        <FaHouse /> Back to Home
                    </Link>
                    <Link to="/about#contact" className={styles.contactBtn}>
                        Contact Support <FaArrowRight style={{ marginLeft: '0.4rem' }} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
