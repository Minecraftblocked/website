import Link from 'next/link';
import { LuArrowDownAZ } from 'react-icons/lu';

const About: React.FC = () => {
	return (
		<div className="mt-12">
			{/* Header */}
			<div className="flex items-center gap-3">
				<div className="p-4">
					<div className="text-4xl text-text">
						<LuArrowDownAZ />
					</div>
				</div>
				<div>
					<div className="font-serif text-2xl font-black text-text">About us</div>
				</div>
			</div>
			<div className="mt-4 font-sans text-sm leading-7 sm:text-base text-text/90">
				<div>
					Committed to transparency within the Minecraft community, particularly regarding Mojang&apos;s enforcement of
					the
					<Hyperlink href="https://www.minecraft.net/en-us/eula">End User License Agreement (EULA).</Hyperlink>
					Our service aims to shed light on the increasing number of Minecraft servers being banned due to EULA
					violations, and to provide clarity on what these servers are.
				</div>
				<div className="mt-6">
					Using the latest tech like Express.JS, Next.js, Prisma, and TypeScript, we&apos;ve built a robust service free
					for everyone. And here&apos;s the cool part - the entire project is open source! It&apos;s maintained by one
					guy, and is available for anyone to dig into, play around with, or even contribute. If you&apos;re into
					coding, or just interested in how things work, you&apos;re welcome to check out our code, drop a few
					suggestions or fixes, or even add some new features. You can find the project on our
					<Hyperlink href="https://github.com/Minecraftblocked">Github page.</Hyperlink>
					Join in, help out, and let&apos;s make this thing even better!
				</div>
				<div className="mt-6">
					This project actually found its inspiration from
					<Hyperlink href="https://twitter.com/BlockedServers">@Blocked servers</Hyperlink>
					on Twitter, and we&apos;re big fans of what they do. In fact, we&apos;ve even incorporated parts of their
					service into our website to make your experience even better. And if you&apos;ve ever been on
					<Hyperlink href="https://mcstatus.io/">mcstatus.io,</Hyperlink> you might see a bit of a resemblance -
					it&apos;s another huge inspiration for our design and functionality. We&apos;re all about blending the best
					parts of what&apos;s already out there to create something new and even more useful. Check it out and see for
					yourself!
				</div>
			</div>
		</div>
	);
};

interface HyperlinkProps {
	href: string;
	children: React.ReactNode;
}
const Hyperlink: React.FC<HyperlinkProps> = ({ children, href }) => {
	return (
		<Link href={href}>
			<div className="inline mx-1 transition-colors border-b cursor-pointer border-text/10 text-link hover:border-text/50">
				{children}
			</div>
		</Link>
	);
};

export default About;
