import { error } from '@sveltejs/kit';
import { cases } from '../../../data/cases.js';

export const load = ({ params }) => {
	const clientCase = cases.find((service) => service.slug === '/cases/' + params.slug);

	if (!clientCase) throw error(404);
	return {
		clientCase
	};
};
