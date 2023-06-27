import { Crawl as CrawlPrisma, Server as ServerPrisma } from '@prisma/client';

interface Server extends ServerPrisma {
	crawl: CrawlPrisma | null;
}

export default Server;
