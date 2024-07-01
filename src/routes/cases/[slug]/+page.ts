import { cases } from '$lib/data/cases';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const clientCase = cases.find((clientCase) => clientCase.slug === '/cases/' + params.slug);

	if (!clientCase) throw error(404);
	return {
		clientCase
	};
};
