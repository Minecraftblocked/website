/**
 * Retrieves a paginated list of servers based on search terms or retrieves all servers if no search terms are provided.
 *
 * @route GET /api/pagination?page={page_number}&searchTerms={search_terms}
 *
 * @param {NextApiRequest} req - The request object with optional query parameters:
 *                               - page: The page number for pagination.
 *                               - searchTerms: Terms to search by server host or server name.
 * @param {NextApiResponse<Response>} res - The response object.
 *
 * @returns {Object} An array of servers (up to 12 per page) sorted by creation date in descending order. If searchTerms is provided, the result is filtered by the search terms in server host or server name.
 */
import Server from '@/models/Server';
import prisma from '@/prisma';
import { sendSuccess } from '@/utils/apiUtils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{
		servers: Server[];
	}>,
) {
	const { page, searchTerms, notFound, uncensored } = req.query;

	const perPage = 12;
	const pageNum = page ? Number(page) : 1;

	let servers: Server[] = [];
	if (searchTerms) {
		servers = await prisma.server.findMany({
			orderBy: {
				createdAt: 'desc',
			},
			include: {
				crawl: true,
			},
			where: {
				crawl: {
					OR: {
						serverHost: {
							search: String(searchTerms),
						},
						serverName: {
							search: String(searchTerms),
						},
					},
				},
			},
			skip: (pageNum - 1) * perPage,
			take: perPage,
		});
	} else {
		servers = await prisma.server.findMany({
			orderBy: {
				createdAt: 'desc',
			},
			include: {
				crawl: true,
			},
			skip: (pageNum - 1) * perPage,
			take: perPage,
		});
	}

	return sendSuccess(res, { servers });
}
