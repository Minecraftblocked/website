import useSearch from '@/hooks/useSearch';
import Input from '../ui/Input';
import { LuLoader2 } from 'react-icons/lu';
import useSearchEffect from '@/hooks/useSearchEffect';
import RecentCard from './RecentCard';
import Link from 'next/link';

interface Props {
	value: string;
	setValue: (value: string) => void;
}
const Search: React.FC<Props> = ({ value, setValue }) => {
	const { data, loading } = useSearch(value);
	const { placeholder } = useSearchEffect();
	return (
		<div>
			<div className="font-serif text-5xl font-black text-text">Minecraft Blocked</div>
			<div className="mt-4 font-serif text-xl sm:text-2xl font-base text-text/90">
				Quickly retrieve the blocked status of any Minecraft server
			</div>
			<div className="relative">
				<Input
					value={value}
					onChange={(evt) => setValue(evt.target.value)}
					placeholder={placeholder}
					className="mt-2 text-lg"
					aria-label={'Search server hostname'}
				/>
				{loading ? (
					<div className="absolute -ml-9 top-7 left-full">
						<LuLoader2 className="text-xl sm:text-2xl text-text animate-spin" />
					</div>
				) : (
					<>
						{data && (
							<div className="relative z-30 w-full p-4 mt-1 border rounded bg-text/5 text-text rounded-2 border-text/20 top-full">
								<div className="flex items-center gap-2">
									{data.isBlocked ? (
										<div className="px-2 py-1 text-sm font-semibold rounded bg-bad/30">
											Server is identified as blocked by Mojang
										</div>
									) : (
										<div className="px-2 py-1 text-sm font-semibold rounded bg-good/30">
											Server is now unblocked by Mojang
										</div>
									)}
								</div>
								<div className="mt-2">
									{data.crawl && (
										<Link href={`/servers/${data.id}`}>
											<RecentCard delayTimer={0} server={data} />
										</Link>
									)}
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Search;
