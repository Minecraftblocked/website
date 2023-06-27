import Server from '@/models/Server';
import Card from '../ui/Card';
import RecentCardStatus from './RecentCardStatus';
import moment from 'moment';
import { timeSince } from '@/utils/dateUtils';

interface Props {
	server: Server;
	delayTimer: number;
	timed?: boolean;
}
const RecentCard: React.FC<Props> = ({ server, delayTimer, timed }) => {
	return (
		<Card intent={'big'}>
			{timed && <div className="mb-1 text-xs text-text/70">{timeSince(new Date(server.createdAt))} ago</div>}
			<div className="text-sm sm:text-base">
				<div className={'h-full flex justify-between items-center'}>
					{server.crawl && server.crawl.serverHost && server.crawl.serverPort ? (
						<>
							<div className="flex items-center gap-2">
								<RecentCardStatus
									delayTimer={delayTimer}
									serverHost={server.crawl.serverHost}
									serverPort={server.crawl.serverPort}
								/>
								<div>{server.crawl.serverName}</div>
							</div>
							<div>
								{server.crawl.serverHost}
								{server.crawl.serverPort != 25565 && <>{server.crawl.serverPort}</>}
							</div>
						</>
					) : (
						<div className="flex items-center justify-between w-full">
							<div className="px-2 py-1 font-serif text-sm border rounded bg-text/5 border-text/30">
								Not identified server yet
							</div>
							<div>{server.mojangHash.substring(0, 12)}...</div>
						</div>
					)}
				</div>
				{server.blockedReason && (
					<div className="flex items-center gap-1">
						<div className="mt-1 text-xs text-text/50">{moment(server.createdAt).format('DD-MMM')}</div>
						<div className="mt-1 text-xs text-text/50">-</div>
						<div className="mt-1 text-xs text-text/50">{server.blockedReason}</div>
					</div>
				)}
			</div>
		</Card>
	);
};

export default RecentCard;
