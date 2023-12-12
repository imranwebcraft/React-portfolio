import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouyt = () => {
	return (
		<div className=" bg-[#011627] font-secondary px-2">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayouyt;
