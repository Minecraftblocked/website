import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Server from '@/models/Server';

function useRecentServers() {
	const { isLoading, isError, data } = useQuery(['recentServers'], fetchRecentServers);
	return { isLoading, isError, data };
}

async function fetchRecentServers(): Promise<Server[]> {
	const response = await axios.get('/api/recent');
	return response.data.servers;
}

export default useRecentServers;
