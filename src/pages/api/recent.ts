/**
 * Retrieves a list of the most recently created blocked servers that are not in a wildcard blacklist, and not censored.
 *
 * @route GET /api/recent
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse<Response>} res - The response object.
 *
 * @returns {Object} An array of the most recent blocked servers (up to 12), including related crawl and ServerStatusChange data, excluding servers in wildcard blacklist, censored servers, and servers with an ignore reason.
 */
import Server from '@/models/Server';
import prisma from '@/prisma';
import { wildcardBlackList } from '@/utils/blacklistUtils';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
	servers: Server[];
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
	const recentServers = await prisma.server.findMany({
		orderBy: {
			createdAt: 'desc',
		},
		take: 12,
		include: {
			crawl: true,
			ServerStatusChange: true,
		},
		where: {
			isBlocked: true,
			crawl: {
				serverHostWildcard: {
					notIn: wildcardBlackList,
				},
				censored: false,
			},
			ignoreReason: null,
		},
	});

	return res.status(200).json({ servers: recentServers });
}
