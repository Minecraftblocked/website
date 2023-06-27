import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { LuRefreshCw } from 'react-icons/lu';

interface Props {
	title?: string;
	goBack?: boolean;
	loading?: boolean;
}
const Header: React.FC<Props> = ({ title, goBack = true, loading }) => {
	return (
		<div className="flex items-center justify-between">
			<div>
				<div className="font-serif text-5xl font-black text-text">MCB</div>
				<div className="flex mt-4 text-2xl font-base text-text/90">
					{loading ? (
						<div>
							<LuRefreshCw className="animate-spin text-text/80" />
						</div>
					) : (
						<>{title}</>
					)}
				</div>
			</div>
			<div>
				{goBack && (
					<Link href="/">
						<Button intent={'small'}>Go back</Button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
