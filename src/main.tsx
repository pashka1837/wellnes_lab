import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Landing from './Pages/Landing.tsx';
import Hero from './Components/Hero/Hero.tsx';
import Feautures from './Components/Feautures/Feautures.tsx';
import Signup from './Components/Signup/Signup.tsx';

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
				path: 'features',
				element: <Feautures />,
			},
			{
				path: 'signup',
				element: <Signup />,
			},
	  ],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
