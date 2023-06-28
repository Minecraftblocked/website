interface Props {
	timestamp: Date;
}
const Timestamp: React.FC<Props> = ({ timestamp }) => {
	const formattedOriginalBlock = new Date(timestamp).toLocaleString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});

	return formattedOriginalBlock;
};

export default Timestamp;
