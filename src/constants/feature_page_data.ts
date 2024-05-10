import data_bro_img from '../assets/images/cards/data-extraction-bro.svg';
import perfor_over_img from '../assets/images/cards/performance-overview-bro.svg';
import nfr_for_all_img from '../assets/images/cards/NFT-amico.svg';
import cross_platform_img from '../assets/images/cards/cross-platform-software-amico.svg';

export type CardData = {
	imgSrc: string;
	desc: string;
};

const data: CardData[] = [
	{
		imgSrc: data_bro_img,
		desc: 'Our platform leverages state-of-the-art artificial intelligence to deliver unparalleled insights and performance.',
	},
	{
		imgSrc: perfor_over_img,
		desc: 'Backed by a team of finance, technology, and data science experts, we are committed to helping you achieve your financial goals.',
	},
	{
		imgSrc: nfr_for_all_img,
		desc: 'Our platform is designed with user experience in mind. Whether you\'re a seasoned investor or new to the crypto and NFT markets, our intuitive interface makes it easier.',
	},
	{
		imgSrc: cross_platform_img,
		desc: 'We regularly update and enhance our platform with new features and functionalities, ensuring that you have access to the latest tools and technologies.',
	},
];

export default data;
