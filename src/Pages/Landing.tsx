import {Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

export default function Landing() {
	return (
		<>
			<Navbar/>
			<Outlet />
		</>

	);
}
