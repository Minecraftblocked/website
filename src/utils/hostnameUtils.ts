import url from 'url';
import net from 'net';
import crypto from 'crypto';

export function validateHostnameOrIP(input: string) {
	if (net.isIP(input)) return true;

	let hostname;
	const isWildcard = input.startsWith('*.');
	if (isWildcard) {
		input = input.substring(2);
	}

	try {
		hostname = new url.URL(`http://${input}`).hostname;
	} catch (_) {
		return false;
	}

	const validHostnameRegex =
		/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

	return validHostnameRegex.test(hostname);
}

export const parseWildcardHostname = (address: string): string | null => {
	const parts = address.split('.');
	if (parts.length > 2) {
		parts[0] = '*';
		return parts.join('.');
	} else {
		return null;
	}
};

export const hashHostname = (hostname: string) => {
	// Convert the hostname to lower case
	const lowercaseHostname = hostname.toLowerCase();

	// Remove any trailing periods
	const finalHostname = lowercaseHostname.endsWith('.') ? lowercaseHostname.slice(0, -1) : lowercaseHostname;

	// Create the SHA-1 hash
	const hash = crypto.createHash('sha1');
	hash.update(finalHostname);

	return hash.digest('hex');
};
