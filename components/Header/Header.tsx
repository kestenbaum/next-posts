import React from 'react';
import Link from "next/link"

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Link href={"/"}>Logo</Link>
                    <menu>
                        <Link href="/posts">Posts</Link>
                    </menu>
                </div>
            </div>
        </header>
    );
};

export default Header;