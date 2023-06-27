import { useState, useEffect } from 'react';

const useTypewriterEffect = (strings: string[], initialDelay = 3000, speed = 100, deleteSpeed = 30) => {
	const [activeStringIndex, setActiveStringIndex] = useState(0);
	const [typedValue, setTypedValue] = useState(strings[0]);
	const [isDeleting, setIsDeleting] = useState(false);
	const activeString = strings[activeStringIndex];

	useEffect(() => {
		let timer: any;

		const changeValue = () => {
			if (isDeleting) {
				setTypedValue(typedValue.slice(0, typedValue.length - 1));
				if (typedValue.length <= 1) {
					setIsDeleting(false);
					setActiveStringIndex((activeStringIndex + 1) % strings.length);
				}
			} else {
				setTypedValue(activeString.slice(0, typedValue.length + 1));
				if (typedValue.length + 1 >= activeString.length) {
					timer = setTimeout(() => setIsDeleting(true), initialDelay);
				}
			}
		};

		if (typedValue === '' && activeStringIndex === 0 && !isDeleting) {
			timer = setTimeout(changeValue, initialDelay);
		} else {
			timer = setTimeout(changeValue, isDeleting ? deleteSpeed : speed);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [typedValue, activeString, activeStringIndex, isDeleting, strings, speed, deleteSpeed, initialDelay]);

	return typedValue;
};

export default useTypewriterEffect;
