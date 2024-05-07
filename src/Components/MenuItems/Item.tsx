import {
	Link, useLocation,
} from 'react-router-dom';
import useStore from '../../feature/store';
import {type MyLink} from './MenuItems';
import styles from './MenuItems.module.css';

export default function Item({href, desc, svg}: MyLink) {
	const {setOpen} = useStore();
	const location = useLocation();
	const isCurrent = location.pathname === href;

	return (
		<Link
			className={`${styles.menuLink} ${isCurrent ? styles.current : ''}`}
			onClick={() => {
				setOpen(false);
			}}
			to={href}>
			<span>{desc}</span>
			<span>{svg}</span>
		</Link>
	);
}
