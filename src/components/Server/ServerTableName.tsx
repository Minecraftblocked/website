import Server from '@/models/Server';

interface Props {
	server: Server;
}
const ServerTableName: React.FC<Props> = ({ server }) => {
	return (
		<div className="flex items-center gap-2">
			{server.crawl?.serverName && server.crawl.serverName !== 'unknown' ? (
				<div>{server.crawl.serverName}</div>
			) : (
				<div className="italic">Name not identified yet</div>
			)}
		</div>
	);
};

export default ServerTableName;
