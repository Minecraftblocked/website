import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function useServerStatus(serverHost: string, serverPort: number, delayTimer: number = 0) {
	const { isLoading, isError, data } = useQuery(
		[`serverStatus_${serverHost}`],
		() => fetchServerStatus(serverHost, serverPort, delayTimer),
		{
			cacheTime: 5 * 60 * 1000,
			retry: 1,
			retryDelay: (attemptIndex) => Math.min(attemptIndex * 1000, 3000),
		},
	);

	return { isLoading, isError, data };
}

async function fetchServerStatus(serverHost: string, serverPort: number, delayTimer: number): Promise<boolean> {
	return new Promise<boolean>((resolve) =>
		setTimeout(async () => {
			const response = await axios.get(`https://api.mcstatus.io/v2/status/java/${serverHost}:${serverPort}`);
			resolve(response.data.online);
		}, delayTimer),
	);
}

export default useServerStatus;
