import Link from 'next/link';
import { LuHeart } from 'react-icons/lu';
import LatestGitCommit from './LatestGitCommit';

const Footer: React.FC = () => {
	return (
		<footer className="relative pb-8 mt-12 text-sm sm:text-base">
			<div className="container px-4 py-4 mx-auto sm:px-2">
				<div className="pt-6 border-t-2 border-text/5">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1">
							<div>Made with</div>
							<div>
								<LuHeart className="text-red-400" />
							</div>
							<div className="flex items-center gap-1">
								<div>by</div>
								<Link href="https://james.buzz">
									<div className="font-serif font-bold text-text/90">James.buzz</div>
								</Link>
							</div>
						</div>
						<LatestGitCommit />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
