import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';

const useSearch = (prompt: string) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		if (prompt.length > 2) {
			setLoading(true);
		}

		const timerId = setTimeout(() => {
			setSearchTerm(prompt.toLowerCase().trim());
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [prompt]);

	const { data, isError } = useQuery(
		['searchServer', searchTerm],
		async () => {
			const response = await axios.get(`/api/search?prompt=${searchTerm}`);
			setLoading(false);
			return response.data.data.result ? response.data.data.result : null;
		},
		{
			enabled: searchTerm.length > 2,
		},
	);

	return { data, loading, isError };
};

export default useSearch;
