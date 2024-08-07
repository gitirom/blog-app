import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/12266046/pexels-photo-12266046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
                </div>
                <span className={styles.date} >01.01.2024</span>
            </div>
            <div className={styles.buttom}>
                <h1 className={styles.title}>title</h1>
                <p className={styles.desc}>desc</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard
