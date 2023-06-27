import useUnblockedServers from '@/hooks/useUnblockedServers';
import RecentCard from './RecentCard';
import Link from 'next/link';
import { LoadingSkeleton } from './Recent';

const Unblocked: React.FC = () => {
	const { isLoading, data } = useUnblockedServers();
	const skeletonArray = new Array(6).fill(null);
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

export default Unblocked;
