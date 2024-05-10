import styles from './Signup.module.css';
import websiteIMG from '../../assets/images/website_setup.svg';
import {instaLink, supportLink, twitterLink} from '../../constants/links';
import {instLogo, twitterLogo} from '../../svgs/svgs';

export default function Signup() {
	return (
		<div className={`${styles.signup} container_gr`}>
			<div >
				<h3 className={styles.inner}>This page is currently under development!</h3>
				<p>Follow us for updates at <a className={styles.social_link} href={twitterLink}>{twitterLogo}</a>
				or {' '}
					<a className={styles.social_link} href={instaLink}>{instLogo}</a>
				</p>
				<p>All questions for early access <a className={styles.social_link} href={`mailto:${supportLink}`}>{supportLink}</a></p>
			</div>
			<img className={styles.signup_img} src={websiteIMG} alt='website setup image' />
		</div>
	);
}
