import Server from '@/models/Server';

interface Props {
	server: Server;
}
const ServerTablePort: React.FC<Props> = ({ server }) => {
	return <>{server.crawl ? <div>{server.crawl.serverPort}</div> : <div>error</div>}</>;
};

export default ServerTablePort;
