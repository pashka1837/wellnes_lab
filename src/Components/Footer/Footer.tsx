import './Footer.css';
import logo from '../../assets/logo.webp';

export default function Footer() {
	return (
		<div className='footer' >
			<div className='logo_footer' >
				<p> DIGITAL PAWS </p>
				<img src={logo} alt='logo' />
			</div>
			<p>  2024 all rights reserved</p>
		</div>
	);
}
