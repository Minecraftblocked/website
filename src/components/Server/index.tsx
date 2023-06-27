import Container from '../ui/layouts/Container';
import Header from '../ui/Header';
import useServer from '@/hooks/useServer';
import ServerTable from './ServerTable';
import ServerTableStatus from './ServerTableStatus';
import Server from '@/models/Server';
import ServerTableReason from './ServerTableReason';
import ServerTableSeenAt from './ServerTableSeenAt';
import ServerTableName from './ServerTableName';
import ServerTableHost from './ServerTableHost';
import ServerTableWildcard from './ServerTableWildcard';
import ServerTablePort from './ServerTablePort';
import ServerTableHash from './ServerTableHash';
import { motion } from 'framer-motion';

interface Props {
	id: string;
}
const Server = ({ id }: Props) => {
	const { isLoading, data } = useServer(id);
	return (
		<Container title={'Server'}>
			<div className="mt-20">
				{isLoading ? (
					<>
						<Header loading={true} />
					</>
				) : (
					<>
						<Header title={data?.crawl?.serverHost || 'unknown'} />
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 50, opacity: 0 }}
							transition={{
								type: 'spring',
								stiffness: 160,
								damping: 20,
							}}
						>
							{data && <Table server={data} />}
						</motion.div>
					</>
				)}
			</div>
		</Container>
	);
};

const Table = ({ server }: { server: Server }) => {
	return (
		<div className="grid grid-cols-12 mt-4">
			<div className="col-span-12 sm:col-span-8">
				<ServerTable
					header={'Blocked status'}
					rows={[
						{
							name: 'status',
							children: <ServerTableStatus server={server} />,
						},
						{
							name: 'reason',
							children: <ServerTableReason server={server} />,
						},
						{
							name: 'seen at',
							children: <ServerTableSeenAt server={server} />,
							help: 'The time we see the block, not necessarily its actual time',
						},
					]}
				/>
				{server.crawl && (
					<ServerTable
						header={'Server details'}
						rows={[
							{
								name: 'name',
								children: <ServerTableName server={server} />,
							},
							{
								name: 'hostname',
								children: <ServerTableHost server={server} />,
							},
							{
								name: 'port',
								children: <ServerTablePort server={server} />,
							},
							{
								name: 'wildcard',
								children: <ServerTableWildcard server={server} />,
							},
						]}
					/>
				)}
				<ServerTable
					header={'Mojang hashes'}
					rows={[
						{
							name: 'Server Hash',
							children: <ServerTableHash hash={server.mojangHash} />,
							help: 'Mojang uses a SHA-1 format hash to block the server',
						},
						{
							name: 'Wildcard Hash',
							children: <ServerTableHash hash={server.crawl?.hashedHostWildcard || ''} />,
							help: 'Mojang blocks the server using a SHA-1 hash and may also use a hostname wildcard',
						},
					]}
				/>
			</div>
		</div>
	);
};

export default Server;
