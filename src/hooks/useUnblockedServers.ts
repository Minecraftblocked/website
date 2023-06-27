import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Server from '@/models/Server';

function useUnblockedServers() {
	const { isLoading, isError, data } = useQuery(['unblockedServers'], fetchUnblockedServers);
	return { isLoading, isError, data };
}

async function fetchUnblockedServers(): Promise<Server[]> {
	const response = await axios.get('/api/unblocked');
	return response.data.servers;
}

export default useUnblockedServers;
