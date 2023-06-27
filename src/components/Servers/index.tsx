import usePagination from '@/hooks/usePagination';
import Header from '../ui/Header';
import Container from '../ui/layouts/Container';
import { useState } from 'react';
import Pagination from './Pagination';

const Servers = () => {
	const [page, setPage] = useState(1);

	const { isLoading, data } = usePagination(page);
	const onPageChange = (page: number) => {
		setPage(page);
	};
	return (
		<Container title={'Servers'}>
			<div className="mt-20">
				<Header title={'List all known blocked and unblocked servers'} />
			</div>
			<div className="mt-6">
				<Pagination page={page} onPageChange={setPage} isLoading={isLoading} servers={data} />
			</div>
		</Container>
	);
};

export default Servers;
