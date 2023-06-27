import Server from '@/models/Server';
import Card from '../ui/Card';
import moment from 'moment';

interface Props {
	server: Server;
}
const ServerCard: React.FC<Props> = ({ server }) => {
	return (
		<Card intent={'big'} className={'grow'}>
			<div className="h-8 text-sm sm:text-base">
				<div className={'h-full flex justify-between items-center'}>
					{server.crawl && server.crawl.serverHost && server.crawl.serverPort ? (
						<>
							<div className="flex items-center gap-2">
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

export default ServerCard;
