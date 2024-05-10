import './App.css';
import Hero from './Components/Hero/Hero';
import Feautures from './Components/Feautures/Feautures';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Landing from './Pages/Landing';
import Signup from './Components/Signup/Signup';

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
				element: <Signup />,
			},
	  ],
	},
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
