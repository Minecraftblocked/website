import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { LuGitBranch, LuRefreshCw } from 'react-icons/lu';

const LatestGitCommit: React.FC = () => {
	const { isLoading, isError, data } = useQuery(['latest-commit'], async () => {
		const response = await axios.get(`./api/latest-commit`);
		const sha = `${response.data.data.sha}`.substring(0, 7);
		return sha;
	});
	if (isLoading) {
		return (
			<div>
				<LuRefreshCw className="text-text/60 animate-spin" />
			</div>
		);
	}
	if (isError) {
		return <div></div>;
	}
	return (
		<>
			{data && (
				<Link href="https://github.com/Minecraftblocked/">
					<div className="flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors rounded bg-bad/30 hover:bg-bad/40">
						<LuGitBranch />
						<div>{data}</div>
					</div>
				</Link>
			)}
		</>
	);
};

export default LatestGitCommit;
