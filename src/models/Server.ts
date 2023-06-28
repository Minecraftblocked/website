import { Crawl as CrawlPrisma, Server as ServerPrisma } from '@prisma/client';
import ServerStatusChange from './ServerStatusChange';

interface Server extends ServerPrisma {
	crawl: CrawlPrisma | null;
	ServerStatusChange: ServerStatusChange[];
}

export default Server;
