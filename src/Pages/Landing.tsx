import {Outlet, useNavigation} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

export default function Landing() {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';
	return (
		<>
			<Navbar/>
			{isLoading ? <h2>loading</h2> : <Outlet/>}
		</>

	);
}
