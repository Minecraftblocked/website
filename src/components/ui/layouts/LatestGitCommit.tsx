import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { LuCog, LuGitBranch } from 'react-icons/lu';

const LatestGitCommit: React.FC = () => {
	const { isLoading, isError, data } = useQuery(['repoData'], async () => {
		const response = await axios.get('https://github.com/Minecraftblocked/website/commits/main');
		const sha = `${response.data.sha}`.substring(0, 7);
		return sha;
	});
	if (isLoading) {
		return (
			<div>
				<LuCog className="text-text/60 animate-spin" />
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
