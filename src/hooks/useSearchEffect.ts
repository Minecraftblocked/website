import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import Server from '@/models/Server';
import useTypewriterEffect from './useTypeWriterEffect';

const useSearchEffect = () => {
	const [hostnames, setHostnames] = useState<string[]>(['Enter the hostname of a server']);

	useQuery(['searchHostnames'], async () => {
		const response = await axios.get('/api/recent');

		const serverHostnames = response.data.servers
			.slice(0, 5)
			.map((server: Server) => (server.crawl ? 'Search: ' + server.crawl.serverHost : null))
			.filter((hostname: string | null) => hostname !== null) as string[];

		setHostnames((prevHostnames) => [...prevHostnames, ...serverHostnames]);

		return serverHostnames;
	});

	const placeholder = useTypewriterEffect(hostnames);

	return { hostnames, placeholder };
};

export default useSearchEffect;
