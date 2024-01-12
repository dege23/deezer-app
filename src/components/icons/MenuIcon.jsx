import styles from '../css/header.module.css';

const MenuIcon = ({ className, onClick }) => {

    return (
        <section className={className} onClick={onClick}>
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
        </section>
    );

};

export default MenuIcon;