import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Server from '@/models/Server';

function useServer(serverId: string) {
	const { isLoading, isError, data } = useQuery([`server_${serverId}`], () => fetchServer(serverId), {});
	return { isLoading, isError, data };
}

async function fetchServer(serverId: string): Promise<Server> {
	const response = await axios.get(`/api/servers/${serverId}`);
	return response.data.data.server;
}

export default useServer;
