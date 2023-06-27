import { useState, useEffect, use } from 'react';

const useAnimateOnLoad = () => {
	const [shouldAnimate, setShouldAnimate] = useState(true);

	useEffect(() => {
		setShouldAnimate(false);
	}, [setShouldAnimate]);

	return shouldAnimate;
};

export default useAnimateOnLoad;
