import grey_hood_dog from '../assets/images/pets/grey_hood_dog.webp';
import pnk_shds_cat from '../assets/images/pets/pnk_shds_cat.webp';
import prpl_sweat_cat from '../assets/images/pets/prpl_sweat_cat.webp';
import bl_hood_cat from '../assets/images/pets//bl_hood_cat.webp';
import blck_jack_dog from '../assets/images/pets/blck_jack_dog.webp';


import blue_tie_dog from '../assets/images/pets/blue_tie_dog.webp';
import gld_chain_cat from '../assets/images/pets/gld_chain_cat.webp';
import bacwit_dog from '../assets/images/pets/bacwit_dog.webp';
import bck_pack_dog from '../assets/images/pets/bck_pack_dog.webp';
import haski_dog from '../assets/images/pets/haski_dog.webp';
import hat_cat from '../assets/images/pets/hat_cat.webp';
import headphons_dog from '../assets/images/pets/headphons_dog.webp';
import orng_cat from '../assets/images/pets/orng_cat.webp';
import pnk_hoodie_dog from '../assets/images/pets/pnk_hoodie_dog.webp';




export type PetInfo = {
	name: string;
	dogAge: string;
	humAge: string;
	desc: string;
};

export type PetObj = {
	imgSrc: string;
	info: PetInfo;
};

function calc_human_age(dog_age: number) {  
	return `${Math.floor(16 * (Math.log(dog_age)) + 31)}y`;
}
 
function calc_dog_age(dog_age: number) {
	if (dog_age >= 1) {
		const [whole, dec] = dog_age.toString().split('.');
		return `${whole}y ${dec ? `${Math.floor(parseInt(dec)/10 * 12)} month` : ''}`;
	}

	return `${Math.floor(dog_age * 12)} month`;
}

const pets: PetObj[] = [
    {
		imgSrc: bl_hood_cat,
		info: {
			name: 'Kale',
			dogAge: calc_dog_age(0.51),
			humAge: calc_human_age(0.51),
			desc: 'Kale is cool. He loves to play PubG, dresses well but shy.',
		},
	},
	{
		imgSrc: pnk_shds_cat,
		info: {
			name: 'Kate',
			dogAge: calc_dog_age(0.45),
			humAge: calc_human_age(0.45),
			desc: 'Kate is barbie cat. She loves fashion and pink color.',
		},
	},
    {
		imgSrc: blck_jack_dog,
		info: {
			name: 'Tony',
			dogAge: calc_dog_age(1.2),
			humAge: calc_human_age(1.2),
			desc: 'Tony used to be in a mob. Now he onws tattoo salon.',
		},
	},
    {
		imgSrc: prpl_sweat_cat,
		info: {
			name: 'Clare',
			dogAge: calc_dog_age(0.9),
			humAge: calc_human_age(0.9),
			desc: 'Clare is a teacher in middle school. She teaches English Literature but also boxing.',
		},
	},
    {
		imgSrc: grey_hood_dog,
		info: {
			name: 'George',
			dogAge: calc_dog_age(0.7),
			humAge: calc_human_age(0.7),
			desc: 'George barely finished high school. But he knows how to grow plants.',
		},
	},
];

export default pets