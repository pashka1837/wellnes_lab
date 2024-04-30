import './Engagement.css';
import famIMG from '../../assets/images/fam.webp';
import twitSVG from '../../assets/twitter.svg';
import instSVG from '../../assets/insta.svg';

import {instaLink, twitterLink} from '../../links';

export default function Engagement() {
	return (
		<div id='signup' className='engagement container_gr'>
			<div className='subheadline'>
				<h3>
        Follow our socials to find more about early access to <span>COIN PAWS</span> and all other updates!
				</h3>
				<div className='socials'>
					<a className='social_link' href={twitterLink}><img src={twitSVG} alt='twitter image' /></a>
					<a className='social_link' href={instaLink}><img src={instSVG} alt='instagramm image' /></a>
				</div>
			</div>
			<img src={famIMG} alt='pet family image' />
		</div>
	);
}
