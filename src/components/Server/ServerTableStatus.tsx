import Server from '@/models/Server';
import Label from '../ui/Label';

interface Props {
	server: Server;
}
const ServerTableStatus: React.FC<Props> = ({ server }) => {
	return (
		<div className="flex">
			{server.isBlocked ? <Label intent="alert">Blocked</Label> : <Label intent="success">Unblocked</Label>}
		</div>
	);
};

export default ServerTableStatus;
