import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
           <div className={styles.container}>
               <section className={styles.wrapper}>
                   @Posts
               </section>
           </div>
        </footer>
    );
};

export default Footer;