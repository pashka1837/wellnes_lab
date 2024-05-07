import styles from './MenuItems.module.css';
import {twitterLogo} from '../../svgs/svgs';
import Item from './Item';

export type MyLink = {
	href: string;
	desc: string;
	svg?: JSX.Element;
};

const links: MyLink[] = [
	{
		href: '/',
		desc: 'Home',
	},
	{
		href: '/features',
		desc: 'Features',
	},
	{
		href: '/signup',
		desc: 'Sign up',
	},
	{
		href: 'https://twitter.com',
		desc: 'Twitter',
		svg: twitterLogo,
	},

];

export default function MenuItems() {
	return (
		<div className={styles.menuItems}>
			{links.map(link => <Item key={link.href} {...link}/>)}
		</div>
	);
}
