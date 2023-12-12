import Container from '../../UI/Container';
import SectionContainer from '../../UI/SectionContainer';
import { AiTwotoneExperiment } from 'react-icons/ai';

const Experience = () => {
	return (
		<SectionContainer>
			<div
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-delay="500"
				className="flex justify-center mb-5"
			>
				<div className=" flex flex-col space-y-1">
					<h3 className="flex justify-center items-center gap-2 text-xl rounded-lg text-center bg-[#7B4AE2] bg-opacity-5 text-purple-500 px-4 py-2">
						<AiTwotoneExperiment /> Experience
					</h3>
					<p className="inline-block text-base text-gray-400 text-center">
						Embark on a Journey of Discovery and Growth
					</p>
				</div>
			</div>

			<div className=" max-w-5xl mx-auto pt-5">
				<div className=" grid grid-cols-2 gap-10">
					<div className=" border border-purple-500 rounded-md px-10 py-10 space-y-2">
						<p className=" bg-purple-500 bg-opacity-10 px-5 rounded-md py-4 text-gray-200 ">
							2022-Present
						</p>
						<p className=" text-2xl text-gray-200">Learning Experience</p>
					</div>
					<div></div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Experience;
