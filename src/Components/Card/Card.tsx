import './Card.css';
import {type PetObj} from '../pets';

type CardProps = PetObj;

export default function Card({imgSrc, info}: CardProps) {
	const {name, dogAge, humAge, desc, petType} = info;

	return (
		<div className='card'>
			<div className='pet_img_container'>
				<img src={imgSrc} alt='pet image' />
			</div>
			<div className='pet_desc_container'>
				<h3>
					<span>Name:</span> {name}
				</h3>
				<h3>
					<span>{petType} Age:</span> {dogAge}
				</h3>
				<h3>
					<span>Human Age:</span> {humAge}
				</h3>
				<h3>
					<span>Description:</span> {desc}
				</h3>
			</div>
		</div>
	);
}
