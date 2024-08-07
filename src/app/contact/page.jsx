import styles from './contact.module.css';
import Image from 'next/image';

    const contactPage = () => {
        return (
            <div className={styles.container} >
                <div className={styles.imgContainer}>
                    <Image src='/contact.png' alt='' fill className={styles.img} />
                </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form} >
                        <input type="text" placeholder='Name and Surname' name="" id="" />
                        <input type="text" placeholder='Email Address' name="" id="" />
                        <input type="text" placeholder='Phone Number' name="" id="" />
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder='Message'
                        >

                        </textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        )
    }

    export default contactPage
