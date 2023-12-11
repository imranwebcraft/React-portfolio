import { createBrowserRouter } from 'react-router-dom';
import MainLayouyt from '../Layout/MainLayouyt';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import Skills from '../Pages/Skills/Skills';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Experience from '../Pages/Experience/Experience';
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
				path: '/projects',
				element: <Projects></Projects>,
			},
			{
				path: '/skills',
				element: <Skills></Skills>,
			},
			{
				path: '/experience',
				element: <Experience></Experience>,
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
