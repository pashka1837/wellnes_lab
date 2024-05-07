import styles from './Hero.module.css';
import heroIMG from '../../assets/images/hero.svg';

export default function Hero() {
	return (
		<div className={`${styles.hero} container_gr`} >
			<div className={styles.inner}>
				<div className={styles.text}>
					<h1 className={styles.name}>Wellnes Lab</h1>
					<h2 className={styles.desc}>empowering Your financial future in the Crypto and NFT markets</h2>
				</div>
				<img className={styles.hero_img} src={heroIMG} alt='profile image' />
			</div>
			<div className={styles.btn_container}>
				{/* <button className={`${styles.log_btn} ${styles.btn}`} type='button'>Log in</button> */}
				<button className={`${styles.sign_btn} ${styles.btn}`} type='button'>Sign up Now</button>
			</div>
		</div>
	);
}
