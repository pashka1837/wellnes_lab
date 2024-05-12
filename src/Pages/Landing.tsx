import {Outlet, useLocation} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function Landing() {
	const location = useLocation();
	return (
		<>
			<Navbar/>
			<Outlet />
			{location.pathname !== '/' && <Footer/>}
		</>

	);
}
