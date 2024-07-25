'use client';

import Link from 'next/link';
import styles from  './navLink.module.css';
import { usePathname } from 'next/navigation';


const navLink = ({ item }) => {

    //lets create the active path part using this hook
    const pathName = usePathname();

    return (
        <div>
            <Link href={item.path} className={` ${styles.container} ${pathName === item.path && styles.active} `} >
                {item.title}
            </Link>
        </div>
    )
}

export default navLink
