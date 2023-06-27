import '@/styles/globals.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React from 'react';

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
			<Analytics />
		</QueryClientProvider>
	);
}
