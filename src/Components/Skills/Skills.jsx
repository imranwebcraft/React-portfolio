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
			<div className="flex justify-center">
				<h3 className="inline-block rounded-lg text-center bg-[#7B4AE2] bg-opacity-10 text-purple-500 px-4 py-2">
					👨‍💻 Skills
				</h3>
			</div>
			<div className=" max-w-2xl mx-auto pt-5 flex gap-10 flex-wrap justify-center">
				<div>
					<FaHtml5 className=" text-4xl text-purple-400"></FaHtml5>
				</div>
				<div>
					<FaCss3 className=" text-4xl text-purple-400"></FaCss3>
				</div>
				<div>
					<SiTailwindcss className=" text-4xl text-purple-400"></SiTailwindcss>
				</div>
				<div>
					<FaBootstrap className=" text-4xl text-purple-400"></FaBootstrap>
				</div>
				<div>
					<RiJavascriptFill className=" text-4xl text-purple-400"></RiJavascriptFill>
				</div>
				<div>
					<FaReact className=" text-4xl text-purple-400"></FaReact>
				</div>
				<div>
					<GrNode className=" text-4xl text-purple-400"></GrNode>
				</div>
				<div>
					<SiExpress className=" text-4xl text-purple-400"></SiExpress>
				</div>
				<div>
					<SiMongodb className=" text-4xl text-purple-400"></SiMongodb>
				</div>
				<div>
					<IoLogoFirebase className=" text-4xl text-purple-400"></IoLogoFirebase>
				</div>
				<div>
					<FaGithub className=" text-4xl text-purple-400"></FaGithub>
				</div>
				<div>
					<FaGitAlt className=" text-4xl text-purple-400"></FaGitAlt>
				</div>
				<div>
					<FaFigma className=" text-4xl text-purple-400"></FaFigma>
				</div>
				<div>
					<SiVercel className=" text-4xl text-purple-400"></SiVercel>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Skills;
