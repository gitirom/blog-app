import styles from './blog.module.css';
import PostCard from '@/componnents/postCard/postCard';
    const blogPage = () => {
        return (
            <div className={styles.container} >
                <div className={styles.post} >
                    <PostCard />
                </div>
                <div className={styles.post} >
                    <PostCard />
                </div>
                <div className={styles.post} >
                    <PostCard />
                </div>
                <div className={styles.post} >
                    <PostCard />
                </div>
            </div>
        )
    }

    export default blogPage
