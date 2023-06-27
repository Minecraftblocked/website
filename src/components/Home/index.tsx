import { useState } from 'react';
import Container from '../ui/layouts/Container';
import Search from './Search';
import RecentList from './Recent';
import UnblockedList from './Unblocked';
import Button from '../ui/Button';
import About from './About';
import { LuListChecks, LuListX } from 'react-icons/lu';
import Link from 'next/link';

const Home = () => {
	const [prompt, setPrompt] = useState('');
	return (
		<Container>
			<div className="mt-20">
				<Search value={prompt} setValue={setPrompt} />
			</div>
			<div className="mt-20">
				<div className="flex items-center gap-3">
					<div className="p-4">
						<div className="text-4xl text-text">
							<LuListX />
						</div>
					</div>
					<div className="">
						<div className="font-serif text-xl font-black sm:text-2xl text-text">Blocked servers</div>
					</div>
				</div>
				<RecentList />
				<div className="flex justify-center mt-4">
					<Link href="/servers">
						<Button intent={'small'}>See all</Button>
					</Link>
				</div>
			</div>
			<div className="mt-20">
				<div className="flex items-center gap-3">
					<div className="p-4">
						<div className="text-4xl text-text">
							<LuListChecks />
						</div>
					</div>
					<div className="">
						<div className="font-serif text-xl font-black sm:text-2xl text-text">Unblocked recently</div>
					</div>
				</div>
				<UnblockedList />
			</div>
			<div className="mt-16">
				<About />
			</div>
		</Container>
	);
};

export default Home;
