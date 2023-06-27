import Server from '@/models/Server';

interface Props {
	server: Server;
}
const ServerTableHost: React.FC<Props> = ({ server }) => {
	return <>{server.crawl?.serverHost ? <div>{server.crawl.serverHost}</div> : <div>error</div>}</>;
};

export default ServerTableHost;
