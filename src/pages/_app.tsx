import '@/styles/globals.scss';
import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<DefaultSeo
				defaultTitle="Minecraftblocked"
				titleTemplate="%s - Minecraftblocked"
				description="Discover the truth behind Minecraft server bans with our free, open-source platform. Minecraftblocked.com"
			/>
			<AnimatePresence mode="wait" initial={true}>
				<Component {...pageProps} />;
			</AnimatePresence>
		</QueryClientProvider>
	);
}
