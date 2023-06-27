import Server from '@/models/Server';

interface Props {
	server: Server;
}
const ServerTableWildcard: React.FC<Props> = ({ server }) => {
	return <>{server.crawl?.serverHostWildcard ? <div>{server.crawl.serverHostWildcard}</div> : <div></div>}</>;
};

export default ServerTableWildcard;
