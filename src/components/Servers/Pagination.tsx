import Server from '@/models/Server';
import Link from 'next/link';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ServerCard from './ServerCard';

interface Props {
	isLoading: boolean;
	servers?: Server[];
	page: number;
	onPageChange: (page: number) => void;
}
const Pagination: React.FC<Props> = ({ isLoading, servers, page, onPageChange }) => {
	const skeletonArray = new Array(12).fill(null);
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 sm:col-span-8">
				<div className="flex flex-col justify-between">
					<div className="">
						{isLoading ? (
							<>
								{skeletonArray.map((_, index) => (
									<div key={index} className="mb-3">
										<LoadingSkeleton />
									</div>
								))}
							</>
						) : (
							<>
								{servers &&
									servers.map((_, index: number) => (
										<Link href={`/servers/${_.id}`} key={index}>
											<div className="mb-3">
												<ServerCard server={_} />
											</div>
										</Link>
									))}
							</>
						)}
					</div>
					<div className="flex items-center justify-between mt-2">
						<div className="w-1/3">{page > 1 && <Button onClick={() => onPageChange(page - 1)}>Back</Button>}</div>
						<div className="flex justify-center w-1/3">
							<div className="font-serif text-sm font-semibold">Page {page}</div>
						</div>
						<div className="flex justify-end w-1/3">
							<Button onClick={() => onPageChange(page + 1)}>Next</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const LoadingSkeleton = () => {
	return (
		<Card intent="big">
			<div className="flex justify-between h-12 animate-pulse">
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

export default Pagination;
