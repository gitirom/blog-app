import styles from './blog.module.css';
import PostCard from '@/componnents/postCard/postCard';
    const blogPage = () => {
        return (
            <div className={styles.container} >
                <PostCard />
            </div>
        )
    }

    export default blogPage
