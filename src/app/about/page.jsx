import Image from "next/image";
import styles from './about.module.css';

const aboutPage = () => {
    return (
        <div>
            <div className={styles.imgContiner}>
                <Image src='https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" fill   />
            </div>
        </div>
    )
}

export default aboutPage
