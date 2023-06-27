/**
 * Searches for and retrieves a server by hostname or IP address.
 *
 * @route GET /api/unblocked?prompt={hostname_or_ip}
 *
 * @param {NextApiRequest} req - The request object with query parameter 'prompt' containing the hostname or IP to search for.
 * @param {NextApiResponse<Response>} res - The response object.
 *
 * @returns {Object} The first server that matches the provided hostname/IP, including related crawl data, or an error message if input is invalid or not found.
 */
import { sendError, sendSuccess } from '@/utils/apiUtils';
import type { NextApiRequest, NextApiResponse } from 'next';
import { hashHostname, parseWildcardHostname, validateHostnameOrIP } from '@/utils/hostnameUtils';
import prisma from '@/prisma';
import Server from '@/models/Server';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{
		result: Server;
	}>,
) {
	const { prompt } = req.query;
	if (!prompt) return sendError(res, 'Prompt is undefined', undefined, 400);

	const validFormat = validateHostnameOrIP(String(prompt));
	if (!validFormat) return sendError(res, 'Not a valid format');

	const terms = String(prompt).toLowerCase();

	const isWildcard = terms.startsWith('*');
	let wildcardHash = '';
	if (!isWildcard) {
		if (terms.split('.').length > 2) {
			const wildcardHost = parseWildcardHostname(terms);
			wildcardHash = await hashHostname(wildcardHost ? wildcardHost : 'null');
		} else {
			wildcardHash = await hashHostname(`*.${terms}`);
		}
	}
	const hash = hashHostname(terms);

	const searchResult = await prisma.server.findFirst({
		where: {
			OR: [
				{
					mojangHash: hash,
				},
				{
					crawl: {
						hashedHost: hash,
					},
				},
				{
					crawl: {
						hashedHostWildcard: wildcardHash,
					},
				},
			],
		},
		include: {
			crawl: true,
		},
	});

	return sendSuccess(
		res,
		{
			result: searchResult,
		},
		200,
	);
}
