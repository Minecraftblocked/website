/**
 * Retrieves a list of the most recently unblocked servers.
 *
 * @route GET /api/unblocked
 *
 * @returns {Object} An array of the most recent unblocked servers (up to 6)
 */
import { sendSuccess } from '@/utils/apiUtils';
import axios from 'axios';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors({
	methods: ['GET', 'HEAD'],
});

const runCors = (req: NextApiRequest, res: NextApiResponse) =>
	new Promise<void>((resolve, reject) => {
		cors(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}
			return resolve(result);
		});
	});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Run the cors middleware
	await runCors(req, res);

	try {
		// Make a request to the GitHub API
		const response = await axios.get('https://api.github.com/repos/Minecraftblocked/website/commits/main');
		const sha = `${response.data.sha}`.substring(0, 7);

		// Return the response
		return sendSuccess(res, {
			sha: sha,
		});
	} catch (error) {
		res.status(500).json({ error: 'An error occurred while fetching the latest commit.' });
	}
}
