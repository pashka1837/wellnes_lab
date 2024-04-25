import './Engagement.css';
import famIMG from '../../assets/images/fam.webp';
import {telegaSVG, twitterSVG} from '../SVG/svg';
import {telegaLink, twitterLink} from '../../links';

export default function Engagement() {
	return (
		<div id='signup' className='engagement container_gr'>
			<div className='subheadline'>
				<h3>
        Follow our socials to find more about early access to <span>DIGITAL PAWS</span> and all other updates!
				</h3>
				<div className='socials'>
					<a className='social_link' href={twitterLink}>{twitterSVG}</a>
					<a className='social_link' href={telegaLink}>{telegaSVG}</a>
				</div>
			</div>
			<img src={famIMG} alt='pet family image' />
		</div>
	);
}
