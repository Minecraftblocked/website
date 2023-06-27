import Server from '@/models/Server';
import Link from 'next/link';

interface Props {
	server: Server;
}
const ServerTableReason: React.FC<Props> = ({ server }) => {
	return (
		<>
			{server.blockedReason ? (
				<div>{server.blockedReason}</div>
			) : (
				<div className="flex gap-1">
					<div>Failed to meet Mojang&apos;s </div>
					<Link href="https://www.minecraft.net/en-us/eula">
						<div className="hover:underline">Eula</div>
					</Link>
				</div>
			)}
		</>
	);
};

export default ServerTableReason;
