/**
 * Retrieves a list of the most recently unblocked servers.
 *
 * @route GET /api/unblocked
 *
 * @returns {Object} An array of the most recent unblocked servers (up to 6)
 */
import Server from '@/models/Server';
import prisma from '@/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{
		servers: Server[];
	}>,
) {
	const recentServers = await prisma.server.findMany({
		orderBy: {
			updatedAt: 'desc',
		},
		take: 6,
		include: {
			crawl: true,
			ServerStatusChange: true,
		},
		where: {
			isBlocked: false,
		},
	});

	// Set Cache-Control header for 5 minutes
	res.setHeader('Cache-Control', 'public, max-age=300');

	return res.status(200).json({ servers: recentServers });
}
