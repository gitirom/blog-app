import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>ROMSOFT</div>
            <div className={styles.text}>
                ROMSOFT creative thoughts agency © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;