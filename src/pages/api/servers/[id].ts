/**
 * Retrieves a server by its ID.
 *
 * @route GET /api/servers/{server_id}
 *
 * @param {NextApiRequest} req - The request object with query parameter 'id' specifying the server ID.
 * @param {NextApiResponse<{server: Server}>} res - The response object.
 *
 * @returns {Object} The server matching the provided ID, including related crawl and ServerStatusChange data, or an error message if the ID is invalid or if the server is not found.
 */
import Server from '@/models/Server';
import prisma from '@/prisma';
import { sendError, sendSuccess } from '@/utils/apiUtils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{
		server: Server;
	}>,
) {
	const { id: rawId } = req.query;
	const id = Number(rawId);
	if (isNaN(id)) return sendError(res, 'Id is invalid');

	const server = await prisma.server.findFirst({
		where: {
			id,
		},
		include: {
			crawl: true,
			ServerStatusChange: true,
		},
	});
	if (!server) return sendError(res, 'Cannot find server by id');

	// @ts-ignore
	return sendSuccess(res, {
		server,
	});
}
