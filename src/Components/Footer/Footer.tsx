import {legalLink, supportLink, twitterLink} from '../../constants/links';
import {twitterLogo} from '../../svgs/svgs';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={`${styles.footer}`} >
			<p>Copyright © 2024 Wellnes LAB </p>
			<div className={styles.links}>
				<p>Account support: <a href={`mailto:${supportLink}`}>{supportLink}</a></p>
				<p>Legal support: <a href={`mailto:${legalLink}`}>{legalLink}</a></p>
				<p>Official Twitter: <a href={twitterLink}>{twitterLogo}</a></p>
			</div>
		</div>
	);
}
