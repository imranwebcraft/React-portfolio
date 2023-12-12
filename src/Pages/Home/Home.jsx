import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import Educatiuon from '../../Components/Educatiuon/Educatiuon';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Imran Portfolio</title>
			</Helmet>
			<Banner></Banner>
			<Skills></Skills>
			<Projects></Projects>
			<Educatiuon></Educatiuon>
		</div>
	);
};

export default Home;
