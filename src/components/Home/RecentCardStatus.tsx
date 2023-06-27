import useServerStatus from '@/hooks/useServerStatus';
import Label from '../ui/Label';
import { LuRefreshCw } from 'react-icons/lu';

interface Props {
	serverHost: string;
	serverPort: number;
	delayTimer: number;
}
const RecentCardStatus: React.FC<Props> = ({ serverHost, serverPort, delayTimer }) => {
	const { isLoading, isError, data } = useServerStatus(serverHost, serverPort, delayTimer);
	return (
		<div className="flex items-center justify-center">
			{isLoading || isError ? (
				<LuRefreshCw className="text-text/60 animate-spin" />
			) : (
				<>
					{data ? (
						<Label
							className="px-2 py-1 font-serif text-xs border rounded text-text bg-primary/80 border-primary"
							intent="outlined"
						>
							Online
						</Label>
					) : (
						<Label intent="primary">Offline</Label>
					)}
				</>
			)}
		</div>
	);
};

export default RecentCardStatus;
