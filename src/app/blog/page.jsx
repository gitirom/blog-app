import styles from './blog.module.css';
import PostCard from '@/componnents/postCard/postCard';

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate: 3600}})  // {cache: 'no-store'} is gone rrfetch your data every time that you open the page or you can use the ravalidate after the time period or you can cach the data so delete the revalidate

    if (!res) {
        throw new Error("Error!!");
    }

    return res.json();
    
}



    const blogPage = async () => {

        const posts = await getData();
        

        return (
            <div className={styles.container} >
                {posts.map((post) => (
                    <div className={styles.post} key={post.id} >
                        <PostCard post={post} />
                    </div>
                ))}
                
            </div>
        )
    }

    export default blogPage
