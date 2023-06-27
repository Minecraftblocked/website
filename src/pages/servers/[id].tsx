import { useRouter } from 'next/router';
import Server from '@/components/Server';
import React from 'react';

const Page = () => {
	const router = useRouter();
	const { id } = router.query;

	return <Server id={String(id)} />;
};

export default Page;
