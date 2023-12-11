import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Button = () => {
	return (
		<div className="grid place-content-start mt-2">
			<EncryptButton />
		</div>
	);
};

const TARGET_TEXT = 'Download Resume';
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = '!@#$%^&*():{};|,.<>/?';

const EncryptButton = () => {
	const intervalRef = useRef(null);

	const [text, setText] = useState(TARGET_TEXT);

	const scramble = () => {
		let pos = 0;

		intervalRef.current = setInterval(() => {
			const scrambled = TARGET_TEXT.split('')
				.map((char, index) => {
					if (pos / CYCLES_PER_LETTER > index) {
						return char;
					}

					const randomCharIndex = Math.floor(Math.random() * CHARS.length);
					const randomChar = CHARS[randomCharIndex];

					return randomChar;
				})
				.join('');

			setText(scrambled);
			pos++;

			if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
				stopScramble();
			}
		}, SHUFFLE_TIME);
	};

	const stopScramble = () => {
		clearInterval(intervalRef.current || undefined);
		setText(TARGET_TEXT);
	};

	return (
		<motion.button
			whileHover={{
				scale: 1.025,
			}}
			whileTap={{
				scale: 0.975,
			}}
			onMouseEnter={scramble}
			onMouseLeave={stopScramble}
			className="group relative overflow-hidden rounded-lg border-[1px] border-slate-500  px-4 py-2 font-mono font-medium uppercase text-slate-300 transition-colors hover:text-purple-300"
		>
			<a
				href="https://drive.google.com/uc?export=download&id=1-l9pgIgr1V1akCIxSEOgclYZdnPFMWt7"
				rel="noopener noreferrer"
				className="relative z-10 flex items-center gap-2"
			>
				<FiDownload />
				<span>{text}</span>
			</a>

			<motion.span
				initial={{
					y: '100%',
				}}
				animate={{
					y: '-100%',
				}}
				transition={{
					repeat: Infinity,
					repeatType: 'mirror',
					duration: 1,
					ease: 'linear',
				}}
				className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
			/>
		</motion.button>
	);
};

export default Button;
