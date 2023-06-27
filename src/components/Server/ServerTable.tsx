import { Popover } from '@headlessui/react';
import classNames from 'classnames';
import { LuHelpCircle } from 'react-icons/lu';

interface ServerTableProps {
	header?: string;
	rows: {
		name: string;
		children: React.ReactNode;
		help?: string;
	}[];
}
const ServerTable: React.FC<ServerTableProps> = ({ header, rows }) => {
	return (
		<div className="mt-4">
			<div
				className={classNames(
					'',
					'rounded bg-text/10 border-text/10 border',
					'relative overflow-hidden',
					'transition duration-300',
				)}
			>
				{header && (
					<div className="p-4 font-serif text-sm font-black border-b sm:text-base border-text/20">{header}</div>
				)}
				<div>
					{rows.map((row, key) => (
						<div
							className={classNames(
								'flex items-center w-full p-4 border-b text-text',
								key == rows.length - 1 ? 'border-text/5' : 'border-text/10',
							)}
							key={key}
						>
							<div className="w-64 font-serif text-sm font-bold sm:text-base">
								<div className="flex items-center gap-1">
									<div>{row.name}</div>
									{row.help && (
										<div>
											<Popover className="relative ">
												<Popover.Button className="flex items-center focus:outline-none">
													<LuHelpCircle className="text-text/50" />
												</Popover.Button>
												<Popover.Panel className="absolute -top-3 z-70 left-6 min-w-[600px]">
													<div className="relative flex items-center">
														<div className="p-2 text-xs font-light text-white rounded bg-text/90">{row.help}</div>
													</div>
												</Popover.Panel>
											</Popover>
										</div>
									)}
								</div>
							</div>
							<div className="w-full overflow-auto font-sans text-text/80">{row.children}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServerTable;
