import Link from "next/link";
import Links from "./links/Links";
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <div className={styles.container} >
            <Link href='/' >
                <div className={styles.logo}>ROM&BLOG</div>
            </Link>
            <div className="">
                <Links />
            </div>
        </div>
    )
}

export default NavBar
