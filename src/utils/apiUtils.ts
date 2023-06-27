import { NextApiResponse } from 'next';

type ErrorResponse = {
	error?: string;
	errors?: { [key: string]: string };
};
type SuccessResponse<T> = {
	data: T;
};

export function sendError(res: NextApiResponse, error?: string, errors?: { [key: string]: string }, code = 400) {
	let response: ErrorResponse = {};
	if (error) {
		response.error = error;
	}
	if (errors) {
		response.errors = errors;
	}
	res.status(code).json(response);
}

export function sendSuccess<T>(res: NextApiResponse, data: T, code: number = 200) {
	const response: SuccessResponse<T> = {
		data,
	};
	res.status(code).json(response);
}
