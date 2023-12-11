import { createBrowserRouter } from 'react-router-dom';
import MainLayouyt from '../Layout/MainLayouyt';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayouyt></MainLayouyt>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: '/about',
				element: <About></About>,
			},
			{
				path: '/contact',
				element: <Contact></Contact>,
			},
		],
	},
]);

export default router;
