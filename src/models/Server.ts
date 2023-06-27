import { Server as ServerPrisma, Crawl as CrawlPrisma, Crawl } from '@prisma/client';

interface Server extends ServerPrisma {
	crawl?: CrawlPrisma;
}

export default Server;
