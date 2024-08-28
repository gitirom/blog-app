    import Image from 'next/image';
    import styles from './singlePost.module.css';

    const singlePostPage = () => {
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
                    <h1 className={styles.title}>Title</h1>
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
                            <span className={styles.detailValue}>Terry Jefferson</span>
                        </div>
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>01.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maiores nesciunt cum dignissimos sunt. Autem blanditiis nisi quaerat ipsum perspiciatis reprehenderit aliquam asperiores, dolor eaque ducimus quibusdam, ex dolorem quis?
                    </div>
                </div>
            </div>
        )
    }

export default singlePostPage