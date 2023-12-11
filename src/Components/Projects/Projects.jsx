import SectionContainer from '../../UI/SectionContainer';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import tourtap from '../../assets/Images/tourtap.png';
import rideMate from '../../assets/Images/rideMate.png';
import shoperz from '../../assets/Images/shoperz.png';

const Projects = () => {
	return (
		<SectionContainer>
			<div className="flex justify-center mb-5">
				<div className=" flex flex-col space-y-1">
					<h3 className="flex justify-center items-center gap-2 text-xl rounded-lg text-center bg-[#7B4AE2] bg-opacity-5 text-purple-500 px-4 py-2">
						<AiOutlineFundProjectionScreen /> Projects
					</h3>
					<p className="inline-block text-base text-gray-400">
						Transforming Knowledge into Innovative Solutions
					</p>
				</div>
			</div>

			{/* Carosouel */}
			<div>
				<div className="max-w-7xl mx-auto flex gap-24 justify-center items-center">
					{/* One */}
					<div className="flex flex-col justify-center items-center gap-2 h-auto">
						<div>
							<img
								className=" h-40 bg-cover bg-center"
								src={tourtap}
								alt="project1"
							/>
						</div>
						<div className=" text-gray-400 flex flex-col justify-center items-center">
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://tour-tap.web.app"
							>
								Prview
							</a>
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://github.com/imranwebcraft/tour-tap-client"
							>
								Frontend
							</a>
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://github.com/imranwebcraft/tour-tap-server"
							>
								Backend
							</a>
						</div>
					</div>
					{/* Two */}
					<div className="flex flex-col justify-center items-center gap-2 h-auto">
						<div>
							<img
								className=" h-40 bg-cover bg-center"
								src={rideMate}
								alt="project1"
							/>
						</div>
						<div className=" text-gray-400 flex flex-col justify-center items-center">
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://pawsgo-7d6e0.web.app"
							>
								Prview
							</a>
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://github.com/imranwebcraft/RideMate-Client"
							>
								Frontend
							</a>
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://github.com/imranwebcraft/RideMate-Server"
							>
								Backend
							</a>
						</div>
					</div>
					{/* Three */}
					<div className="flex flex-col justify-center items-center gap-2 h-auto">
						<div>
							<img
								className=" h-40 bg-cover bg-center"
								src={shoperz}
								alt="project1"
							/>
						</div>
						<div className=" text-gray-400 flex flex-col justify-center items-center">
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://shoperz-3e0d8.web.app"
							>
								Prview
							</a>
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://github.com/imranwebcraft/Shoperz-Client"
							>
								Frontend
							</a>
							<a
								className=" hover:underline hover:decoration-2 hover:decoration-purple-500 decoration-2 underline underline-offset-2 transition-all duration-300  hover:underline-offset-4"
								href="https://github.com/imranwebcraft/Shoperz-Server"
							>
								Backend
							</a>
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Projects;
