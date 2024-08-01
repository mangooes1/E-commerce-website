import Image from 'next/image';
import styles from './Header.module.css';


const ShoppingPage = () => {
  return (
 <>
  <header className={styles.header}>
            <div className={styles.content}>
                <h1>Unlock Your Style</h1>
                <p>
                    Urna nulla nibh morbi neque vestibulum velit, vitae ut
                    pede amet bibendum tortor, aliquam nibh ultricies sed ligula lacus est, ac turpis at pharetra. 
                </p>
                <button>See More</button>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/image.png" // Replace with your image path
                    alt="Fashion Model"
                    layout="fill"
                    objectFit="cover"
                    className={styles.image}
                />
            </div>
        </header>
 </>
  )
}

export default ShoppingPage