import axios from 'axios';
import Server from '@/models/Server';
import { useQuery } from '@tanstack/react-query';

function usePagination(page: number) {
	const { isLoading, isError, data } = useQuery(['usePagination', page], () => fetchPagination(page));
	return { isLoading, isError, data };
}

async function fetchPagination(page: number): Promise<Server[]> {
	const response = await axios.get(`/api/pagination?page=${page}`);
	return response.data.data.servers;
}

export default usePagination;
