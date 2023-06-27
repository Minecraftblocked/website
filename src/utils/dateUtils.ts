export const getTimeDifference = (targetTimestamp: Date): string => {
	const currentTimestamp: Date = new Date();
	const timeDifferenceInSeconds: number = Math.floor((currentTimestamp.getTime() - targetTimestamp.getTime()) / 1000);
	const seconds: number = Math.abs(timeDifferenceInSeconds % 60);
	const minutes: number = Math.abs(Math.floor(timeDifferenceInSeconds / 60) % 60);
	const hours: number = Math.abs(Math.floor(timeDifferenceInSeconds / 3600) % 24);
	const days: number = Math.abs(Math.floor(timeDifferenceInSeconds / 86400));

	const timeUnits: string[] = [];
	if (days > 0) {
		timeUnits.push(`${days} day${days > 1 ? 's' : ''}`);
	}
	if (hours > 0) {
		timeUnits.push(`${hours} hour${hours > 1 ? 's' : ''}`);
	}
	if (minutes > 0) {
		timeUnits.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
	}
	if (seconds > 0) {
		timeUnits.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
	}

	const formattedTimeDifference: string = timeUnits.join(', ');

	return formattedTimeDifference;
};
export function timeSince(date: Date): string {
	const seconds: number = Math.floor((new Date().getTime() - date.getTime()) / 1000);

	let interval: number = seconds / 31536000;

	if (interval >= 1) {
		const years = Math.floor(interval);
		return `${years} year${years > 1 ? 's' : ''}`;
	}

	interval = seconds / 2592000;
	if (interval >= 1) {
		const months = Math.floor(interval);
		return `${months} month${months > 1 ? 's' : ''}`;
	}

	interval = seconds / 86400;
	if (interval >= 1) {
		const days = Math.floor(interval);
		return `${days} day${days > 1 ? 's' : ''}`;
	}

	interval = seconds / 3600;
	if (interval >= 1) {
		const hours = Math.floor(interval);
		return `${hours} hour${hours > 1 ? 's' : ''}`;
	}

	interval = seconds / 60;
	if (interval >= 1) {
		const minutes = Math.floor(interval);
		return `${minutes} minute${minutes > 1 ? 's' : ''}`;
	}

	return `${Math.floor(seconds)} second${seconds > 1 ? 's' : ''}`;
}
