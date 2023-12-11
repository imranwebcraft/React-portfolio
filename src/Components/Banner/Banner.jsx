import bannerImage from '../../assets/Images/Banner.svg';
import Typewriter from 'typewriter-effect';
import Button from '../Button/Button';

const Banner = () => {
	return (
		<div className="max-w-7xl mx-auto min-h-[calc(100vh-162PX)] flex justify-center items-center">
			<div className="flex h-full justify-between items-center">
				{/* Left */}
				<div className="w-2/3 text-[#E5E9F0]">
					<p className="text-lg">Hi all. I am</p>
					<h3 className=" text-6xl mt-1">Imran Hossain Sakil</h3>
					<p className=" text-4xl text-purple-500 mt-2">
						<Typewriter
							options={{
								strings: [' > Full-Stack Developer (MERN)'],
								autoStart: true,
								loop: true,
							}}
						/>
					</p>
					<Button></Button>
				</div>
				{/* Right */}
				<div className="w-1/3">
					<img src={bannerImage} alt="bannerImage" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
