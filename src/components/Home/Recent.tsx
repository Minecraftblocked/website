import Card from '../ui/Card';
import RecentCard from './RecentCard';
import useRecentServers from '@/hooks/useRecentServers';
import Link from 'next/link';

const Recent: React.FC = () => {
	const { isLoading, data } = useRecentServers();
	const skeletonArray = new Array(4).fill(null);

	return (
		<div>
			<div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-x-3 gap-y-3">
				{isLoading ? (
					<>
						{skeletonArray.map((_, index) => (
							<LoadingSkeleton key={index} />
						))}
					</>
				) : (
					<>
						{data &&
							data.map((_, index) => (
								<Link href={`/servers/${_.id}`} key={index}>
									<RecentCard timed={true} delayTimer={index * 500} server={_} />
								</Link>
							))}
					</>
				)}
			</div>
		</div>
	);
};

export const LoadingSkeleton = () => {
	return (
		<Card intent="big">
			<div className="flex justify-between h-7 animate-pulse">
				<div className="flex gap-2">
					<div className="px-2">
						<div className="w-6 h-4 mb-4 rounded-full sm:w-8 bg-text/20"></div>
					</div>
					<div className="">
						<div className="w-32 h-3 mb-4 rounded-full bg-text/20 sm:w-36"></div>
					</div>
				</div>
				<div>
					<div className="">
						<div className="w-32 h-6 mb-4 rounded-full sm:w-48 bg-text/20"></div>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Recent;
