import Server from '@/models/Server';
import { getTimeDifference } from '@/utils/dateUtils';
import React, { useEffect, useState } from 'react';

interface Props {
	server: Server;
}

const ServerTableSeenAt: React.FC<Props> = ({ server }) => {
	const formattedOriginalBlock = new Date(server.updatedAt).toLocaleString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});

	const [timeDifference, setTimeDifference] = useState(getTimeDifference(new Date(server.updatedAt)));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeDifference(getTimeDifference(new Date(server.updatedAt)));
		}, 1000);

		return () => clearInterval(intervalId);
	}, [server.updatedAt]);

	return (
		<div className="flex items-center gap-8">
			<div>{formattedOriginalBlock}</div>
			<div className="text-xs font-light opacity-50">{timeDifference} ago</div>
		</div>
	);
};

export default ServerTableSeenAt;
