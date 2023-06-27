import Container from '../ui/layouts/Container';
import { LuContact, LuMailQuestion } from 'react-icons/lu';
import { questions } from './FAQ.d';
import FAQ from './FAQ';

const About = () => {
	return (
		<Container title={'About'}>
			<div className="mt-20"></div>
			<div className="font-serif text-5xl font-black text-text">About</div>
			<div className="mt-4 font-sans leading-7 text-text/90">
				Minecraftblocked.com keeps a track of the all minecraft servers that have been blocked by Mojang. This is tricky
				as Mojang does not reveal the actual ip address or hostname for the server but only a hash. To match these
				hashes to actual servers, we keep a database of all known public minecraft servers and match these hashes to
				them. To keep it free, we use simple, non-distracting ads. Thanks for using minecraftblocked.com and we welcome
				your feedback.
			</div>
			<section className="mt-20">
				<div className="flex items-center gap-3 text-text">
					<div className="p-4">
						<div className="text-4xl">
							<LuMailQuestion />
						</div>
					</div>
					<div>
						<div className="font-serif text-2xl font-black">Questions</div>
					</div>
				</div>
				<div className="mt-4">
					{questions.map((question, key) => (
						<div key={key} className="mb-4">
							<FAQ question={question.question} answer={question.answer} />
						</div>
					))}
				</div>
			</section>
			<section className="mt-20">
				<div className="flex items-center gap-3 text-text">
					<div className="p-4">
						<div className="text-4xl">
							<LuContact />
						</div>
					</div>
					<div>
						<div className="font-serif text-2xl font-black">Contact</div>
					</div>
				</div>
				<div className="mt-4 text-text/90">
					If you wish to contact us, please do, using the social links in the top right, or contact James directly by
					email using <a href="mailto:hello@james.buzz">hello@james.buzz</a>. We accept any sort of feedback including
					bug reports, feature suggestions, questions about usage, etc.
				</div>
			</section>
		</Container>
	);
};

export default About;
