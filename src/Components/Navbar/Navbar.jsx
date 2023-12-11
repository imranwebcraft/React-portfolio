import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="pt-5">
			<nav
				x-data={{ isOpen }}
				className="relative border border-gray-600 rounded-full max-w-7xl mx-auto"
			>
				<div className="container px-6 py-4 mx-auto">
					<div className="lg:flex lg:items-center lg:justify-between">
						<div className="flex items-center justify-between">
							<Link to={'/'}>
								<span className=" text-2xl text-gray-400">Imran Hossain</span>
							</Link>
							{/* Mobile menu button */}
							<div className="flex lg:hidden">
								<button
									onClick={() => setIsOpen(!isOpen)}
									type="button"
									className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
									aria-label="toggle menu"
								>
									{!isOpen ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 8h16M4 16h16"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
						{/* Mobile Menu open: "block", Menu closed: "hidden" */}
						<div
							className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
								isOpen
									? 'translate-x-0 opacity-100'
									: 'opacity-0 -translate-x-full'
							}`}
						>
							<div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
								<NavLink
									to={'/'}
									className={({ isActive }) =>
										isActive
											? 'px-3 py-2 mx-3 mt-2 text-whitetransition-colors bg-purple-500 duration-300 transform rounded-md lg:mt-0 text-white'
											: 'px-3 py-2 mx-3 mt-2 text-gray-400 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-800 hover:text-white'
									}
								>
									Home
								</NavLink>
								{/* <NavLink
									to={'/projects'}
									className={({ isActive }) =>
										isActive
											? 'px-3 py-2 mx-3 mt-2 text-whitetransition-colors bg-purple-500 duration-300 transform rounded-md lg:mt-0 text-white'
											: 'px-3 py-2 mx-3 mt-2 text-gray-400 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-800 hover:text-white'
									}
								>
									Projects
								</NavLink>
								<NavLink
									to={'/skills'}
									className={({ isActive }) =>
										isActive
											? 'px-3 py-2 mx-3 mt-2 text-whitetransition-colors bg-purple-500 duration-300 transform rounded-md lg:mt-0 text-white'
											: 'px-3 py-2 mx-3 mt-2 text-gray-400 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-800 hover:text-white '
									}
								>
									Skills
								</NavLink>
								<NavLink
									to={'/experience'}
									className={({ isActive }) =>
										isActive
											? 'px-3 py-2 mx-3 mt-2 text-whitetransition-colors bg-purple-500 duration-300 transform rounded-md lg:mt-0 text-white'
											: 'px-3 py-2 mx-3 mt-2 text-gray-400 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-800 hover:text-white '
									}
								>
									Experience
								</NavLink>
								<NavLink
									to={'/about'}
									className={({ isActive }) =>
										isActive
											? 'px-3 py-2 mx-3 mt-2 text-whitetransition-colors bg-purple-500 duration-300 transform rounded-md lg:mt-0 text-white'
											: 'px-3 py-2 mx-3 mt-2 text-gray-400 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-800 hover:text-white '
									}
								>
									About
								</NavLink> */}
								<NavLink
									to={'/contact'}
									className={({ isActive }) =>
										isActive
											? 'px-3 py-2 mx-3 mt-2 text-whitetransition-colors bg-purple-500 duration-300 transform rounded-md lg:mt-0 text-white'
											: 'px-3 py-2 mx-3 mt-2 text-gray-400 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-800 hover:text-white '
									}
								>
									Contact
								</NavLink>
							</div>
							<div className="flex items-center mt-4 lg:mt-0 space-x-2">
								<button className="hidden  text-2xl text-gray-400  hover:text-purple-400 transition-colors duration-300 transform lg:block dark:text-gray-200">
									<FaSquareGithub></FaSquareGithub>
								</button>
								<button className="hidden text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300 transform lg:block dark:text-gray-200">
									<FaLinkedin></FaLinkedin>
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
