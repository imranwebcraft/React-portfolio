const Contact = () => {
	return (
		<section className="text-gray-600 body-font relative min-h-[calc(100vh-162PX)]">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-5">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-400">
						Contact Me
					</h1>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label className="leading-7 text-sm text-gray-400">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-gray-700 bg-opacity-50 rounded border border-purple-300 focus:border-purple-500  focus:ring-1 focus:ring-purple-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label className="leading-7 text-sm text-gray-400">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-gray-600 bg-opacity-50 rounded border border-purple-300 focus:border-purple-500  focus:ring-1 focus:ring-purple-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label className="leading-7 text-sm text-gray-400">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-gray-600 bg-opacity-50 rounded border border-purple-300 focus:border-purple-500  focus:ring-1 focus:ring-purple-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out h-40"
								></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg transition-colors duration-300">
								Send
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
