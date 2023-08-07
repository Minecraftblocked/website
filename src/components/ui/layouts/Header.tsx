import Link from 'next/link';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Header: React.FC = () => {
	const router = useRouter();

	const isActive = (route: string) => {
		return route === router.pathname;
	};

	const pages = [
		{ name: 'About', path: '/about' },
		{ name: 'Servers', path: '/servers' },
	];

	const media = [
		{
			name: 'Github',
			path: 'https://github.com/minecraftblocked',
			icon: <FiGithub />,
		},
		{ name: 'Twitter', path: 'https://twitter.com/mcblockedtweet', icon: <FiTwitter /> },
	];

	return (
		<header className="fixed z-30 w-full overflow-hidden h-22 text-text backdrop-filter backdrop-blur-lg">
			<div className="container px-4 py-4 mx-auto sm:px-2">
				<div className="flex items-center justify-between">
					<div>
						<div className="flex items-center">
							<Link href="/">
								<div className="flex items-center gap-2 px-4">
									<div className="font-serif text-lg font-black md:text-xl">MCB</div>
								</div>
							</Link>
							<div className="pl-6 ml-2 border-l-2 border-text/10">
								<nav className="flex items-center gap-6 sm:gap-8">
									{pages.map((page) => (
										<Link key={page.name} href={page.path}>
											<div
												className={classNames(
													'text-sm md:text-base',
													isActive(page.path) ? 'text-text' : 'text-text/50 transition-colors hover:text-headerText',
												)}
											>
												{page.name}
											</div>
										</Link>
									))}
								</nav>
							</div>
						</div>
					</div>
					<div>
						<nav className="flex items-center gap-4">
							{media.map((page) => (
								<div key={page.name}>
									<Link href={page.path}>
										<div className="p-2 transition-colors rounded-full hover:bg-text/5">
											<div className={classNames('text-lg sm:text-xl', isActive(page.path) ? 'active' : '')}>
												{page.icon}
											</div>
										</div>
									</Link>
								</div>
							))}
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
