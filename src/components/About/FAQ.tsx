import { Disclosure } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';
import Card from '../ui/Card';

interface FAQProps {
	question: string;
	answer: React.ReactNode;
}
const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
	return (
		<Disclosure>
			<Card intent="small">
				<Disclosure.Button className="w-full p-2">
					<div className="flex items-center justify-between w-full">
						<div className="font-serif font-bold text-left">{question}</div>
						<div>
							<FaCaretDown />
						</div>
					</div>
				</Disclosure.Button>
				<Disclosure.Panel>
					<div className="p-4 font-sans border-t border-text/10 text-text/80">{answer}</div>
				</Disclosure.Panel>
			</Card>
		</Disclosure>
	);
};

export default FAQ;
