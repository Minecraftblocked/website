import useServer from '@/hooks/useServer';
import Server from '@/models/Server';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Header from '../ui/Header';
import Timestamp from '../ui/Timestamp';
import Container from '../ui/layouts/Container';
import ServerTable from './ServerTable';
import ServerTableHash from './ServerTableHash';
import ServerTableHost from './ServerTableHost';
import ServerTableName from './ServerTableName';
import ServerTablePort from './ServerTablePort';
import ServerTableReason from './ServerTableReason';
import ServerTableSeenAt from './ServerTableSeenAt';
import ServerTableStatus from './ServerTableStatus';
import ServerTableWildcard from './ServerTableWildcard';

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
						<div className="grid grid-cols-12 mt-4 gap-4">
							<div className="col-span-12 sm:col-span-8">
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
							</div>
							<div className="col-span-12 sm:col-span-4">
								{data?.ServerStatusChange && data.ServerStatusChange.length > 0 && (
									<div className="mt-3">
										<div className="uppercase text-sm font-black font-serif">History</div>
										<div className="mt-3">
											<ol className="border-l-2 text-text border-text/30">
												{data.ServerStatusChange.map((_, index) => (
													<li key={index} className="mt-2">
														<div className="ml-2 flex-start flex items-center">
															<div className="-ml-[13px] mr-3 h-[9px] w-[9px] rounded-full bg-text/50"></div>
															<Card className="grow">
																<div
																	className={classNames(
																		'p-2 border-b border-text/10 font-bold font-serif',
																		_.newIsBlocked ? 'text-red-800' : 'text-teal-800',
																	)}
																>
																	{_.newIsBlocked ? 'Blocked' : 'Unblocked'}
																</div>
																<div className="p-3">
																	<div className="flex gap-1">
																		<div className="w-32 font-medium font-serif">Seen</div>
																		<Timestamp timestamp={_.createdAt} />
																	</div>
																</div>
															</Card>
														</div>
													</li>
												))}

												<li className="mt-4">
													<div className="ml-2 flex-start flex items-center">
														<div className="-ml-[13px] mr-3 h-[9px] w-[9px] rounded-full bg-text/50"></div>
														<Card className="grow">
															<div className="p-2 border-b border-text/10 font-bold font-serif">Blocked</div>
															<div className="p-3">
																<div className="flex gap-1">
																	<div className="w-32 font-medium font-serif">Seen</div>
																	<Timestamp timestamp={data.createdAt} />
																</div>
																<div className="flex gap-1 mt-2">
																	<div className="w-32 font-medium font-serif">Reason</div>
																	{data.blockedReason ? data.blockedReason : 'unknown'}
																</div>
															</div>
														</Card>
													</div>
												</li>
											</ol>
										</div>
									</div>
								)}
							</div>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};

const Table = ({ server }: { server: Server }) => {
	return (
		<>
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
		</>
	);
};

export default Server;
