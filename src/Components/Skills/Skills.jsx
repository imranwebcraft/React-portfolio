import {
	FaReact,
	FaBootstrap,
	FaGithub,
	FaGitAlt,
	FaFigma,
} from 'react-icons/fa';
import SectionContainer from '../../UI/SectionContainer';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { GrNode } from 'react-icons/gr';
import { SiExpress, SiMongodb, SiTailwindcss, SiVercel } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const Skills = () => {
	return (
		<SectionContainer>
			{/* Section */}
			<div className="flex justify-center">
				<h3 className="inline-block text-xl rounded-lg text-center bg-[#7B4AE2] bg-opacity-10 text-purple-500 px-4 py-2">
					👨‍💻 Skills
				</h3>
			</div>
			<div className=" max-w-2xl mx-auto pt-5 flex gap-10 flex-wrap justify-center">
				<div>
					<FaHtml5 className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaHtml5>
				</div>
				<div>
					<FaCss3 className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaCss3>
				</div>
				<div>
					<SiTailwindcss className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></SiTailwindcss>
				</div>
				<div>
					<FaBootstrap className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaBootstrap>
				</div>
				<div>
					<RiJavascriptFill className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></RiJavascriptFill>
				</div>
				<div>
					<FaReact className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaReact>
				</div>
				<div>
					<GrNode className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></GrNode>
				</div>
				<div>
					<SiExpress className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></SiExpress>
				</div>
				<div>
					<SiMongodb className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></SiMongodb>
				</div>
				<div>
					<IoLogoFirebase className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></IoLogoFirebase>
				</div>
				<div>
					<FaGithub className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaGithub>
				</div>
				<div>
					<FaGitAlt className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaGitAlt>
				</div>
				<div>
					<FaFigma className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></FaFigma>
				</div>
				<div>
					<SiVercel className=" text-4xl text-purple-400 hover:-translate-y-1 transition-all duration-300"></SiVercel>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Skills;
