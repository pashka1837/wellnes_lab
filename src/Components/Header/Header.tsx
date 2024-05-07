import './Header.css';
import coinIMG from '../../assets/images/coins/coin.webp';

export default function Header() {
	return (
		<div id='header'
			className='header container_gr'>
			<div className='headline'>
				<div className='text'>
					<h1 className='name'>COIN PAWS</h1>
					<h2 className='desc'>your gateway to the world of virtual pet NFTs</h2>
				</div>
				<img src={coinIMG} alt='coin image' />
			</div>
		</div>
	);
}
