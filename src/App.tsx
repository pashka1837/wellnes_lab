import './App.css';
import Hero from './Components/Hero/Hero';
import DropDownMenu from './Components/DropDownMenu/DropDownMenu';
import Navbar from './Components/Navbar/Navbar';
import Feautures from './Components/Feautures/Feautures';
import Engagement from './Components/Engagement/Engagement';
import Footer from './Components/Footer/Footer';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Landing from './Pages/Landing';

const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Landing />,
	  children: [
			 {
		     index: true,
		       element: <Hero />,
			},
			{
				path: '/features',
				element: <Feautures />,
			},
			{
				path: '/signup',
				element: <Feautures />,
			},
	  ],
	},
]);

function App() {
	return (
		<RouterProvider router={router} />
		// <>
		// 	<Navbar />
		// 	<Hero />
		// 	<Feautures />
		// 	<Engagement />
		// 	<Footer/>
		// </>
	);
}

export default App;
