import Item from './Item';
import './MenuItems.css';
type Link = {
	href: string;
	desc: string | JSX.Element;
};

const links: Link[] = [
	{
		href: '#collection',
		desc: 'Collection',
	},
	{
		href: '#signup',
		desc: 'Sign up',
	},

];

export default function MenuItems() {
	return (
		<div className='menuItems'>
			{links.map(link => <Item key={link.href} {...link} />)}
		</div>
	);
}
