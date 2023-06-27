import { NextSeo } from 'next-seo';
import RaysImage from '../../../../public/img/rays.png';
import { Inter, Syne } from 'next/font/google';
import Header from './Header';
import Image from 'next/image';
import Footer from './Footer';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});
const syne = Syne({
	subsets: ['latin'],
	variable: '--font-serif',
});

interface Props {
	title?: string;
	action?: React.ReactNode;
	children: React.ReactNode;
	description?: string;
}
const Container: React.FC<Props> = ({ title, action, children, description }) => {
	return (
		<>
			{title && <NextSeo title={title} description={description} />}
			<div id="wrapper" className=" text-text bg-primary">
				<div className="relative flex flex-col justify-between min-h-screen">
					<div>
						<Rays />
						<Header />
						<main className="relative z-20">
							<div className="container px-4 pt-24 mx-auto mt-4 sm:px-2">
								<div className="">{children}</div>
							</div>
						</main>
					</div>
					<Footer />
				</div>
			</div>
			<style jsx global>
				{`
					:root {
						--font-sans: ${inter.style.fontFamily};
						--font-serif: ${syne.style.fontFamily};
					}
				`}
			</style>
		</>
	);
};

const Rays: React.FC = () => {
	return (
		<div className="absolute top-0 left-0 z-10 w-full">
			<div className="-mt-56 -ml-10">
				<div className="relative flex items-center justify-center">
					<div className="relative w-[600px] h-[500px]">
						<Image src={RaysImage} alt={'rays'} layout="fill" objectFit="cover" quality={100} className=""></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Container;
