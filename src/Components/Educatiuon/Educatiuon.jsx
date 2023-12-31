import SectionContainer from '../../UI/SectionContainer';

const Educatiuon = () => {
	return (
		<SectionContainer>
			{/* Section */}
			<div
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-delay="200"
				className="flex justify-center"
			>
				<h3 className="inline-block text-xl rounded-lg text-center bg-[#7B4AE2] bg-opacity-5 text-purple-500 px-4 py-2">
					👨‍💻 Education
				</h3>
			</div>
			<div
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-delay="200"
				className="max-w-2xl mx-auto pt-5 text-center text-gray-400"
			>
				<h3 className=" ">Computer Science and Engineering(BSC)</h3>
				<p>Southeast University</p>
				<p>2023-Present</p>
			</div>
		</SectionContainer>
	);
};

export default Educatiuon;
