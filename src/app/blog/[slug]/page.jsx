    import Image from 'next/image';
    import styles from './singlePost.module.css';


    const getData = async (slug) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)  // {cache: 'no-store'} is gone rrfetch your data every time that you open the page or you can use the ravalidate after the time period or you can cach the data so delete the revalidate
    
        if (!res) {
            throw new Error("Error!!");
        }
    
        return res.json();
        
    }

    const singlePostPage = async({params}) => {

        const {slug} = params;
        const post = await getData(slug);

        return (
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.pexels.com/photos/12266046/pexels-photo-12266046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=""
                        fill
                        className={styles.img}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.detail}>
                        <Image
                            src='https://images.pexels.com/photos/12266046/pexels-photo-12266046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            className={styles.avatar}
                            alt=""
                            width={30}
                            height={30}
                        />
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Author</span>
                            <span className={styles.detailValue}>User: {post.userId}</span>
                        </div>
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>01.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {post.body}
                    </div>
                </div>
            </div>
        )
    }

export default singlePostPage